import tkinter as tk
from tkinter import ttk, messagebox
import serial
import time
import threading
from matplotlib.figure import Figure
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import numpy as np

# Serial port and settings
SERIAL_PORT = 'COM5'  # Update to match your Arduino's port
BAUD_RATE = 115200
BUFFER_SIZE = 100  # Match the buffer size in Arduino

# Global variables for data storage
data_buffer = []
resting_data = []
activity_data = []
is_running = True
is_resting = False
is_active = False
y_min_buffer, y_max_buffer = 100, 100  # Extra buffer for Y-axis
x_min, x_max = 0, 500  # Initial X-axis range
spike_threshold = 1000  # Threshold to define spikes


def read_serial_data():
    """Read data from the serial port and update the buffer."""
    global is_running, data_buffer
    try:
        with serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1) as ser:
            print(f"Connected to {SERIAL_PORT} at {BAUD_RATE} baud.")
            time.sleep(2)  # Allow Arduino to reset
            
            while is_running:
                # Read BUFFER_SIZE bytes
                raw_data = ser.read(size=BUFFER_SIZE)
                if raw_data:
                    for i in range(0, len(raw_data), 2):  # Process 2 bytes per sample
                        if i + 1 < len(raw_data):  # Ensure we have 2 bytes
                            msb = raw_data[i] & 0x7F  # Remove frame marker bit
                            lsb = raw_data[i + 1]
                            sample = (msb << 7) | lsb
                            data_buffer.append(sample)
                            if len(data_buffer) > 500:
                                data_buffer.pop(0)
    except serial.SerialException as e:
        print(f"SerialException: {e}")


def start_serial_thread():
    """Start the serial reading thread."""
    thread = threading.Thread(target=read_serial_data, daemon=True)
    thread.start()


def analyze_data(data, label):
    """Analyze the data for averages, ranges, and spikes."""
    if not data:
        return None

    avg_value = np.mean(data)
    data_range = (min(data), max(data))
    spikes = len([x for x in data if x > spike_threshold])

    return {
        "label": label,
        "average": avg_value,
        "range": data_range,
        "spikes": spikes,
    }


def save_analysis(analysis, filename):
    """Save the analysis results to a file."""
    with open(filename, "w") as f:
        for key, value in analysis.items():
            f.write(f"{key}: {value}\n")


def update_plot():
    """Update the plot with new data."""
    global x_min, x_max, y_min_buffer, y_max_buffer, resting_data, activity_data
    if data_buffer:
        displayed_data = data_buffer[:500]  # Use the latest 500 samples for display

        # Append data for analysis
        if is_resting:
            resting_data.extend(displayed_data)
        elif is_active:
            activity_data.extend(displayed_data)

        # Dynamically adjust the Y-axis range based on data
        y_min, y_max = min(displayed_data), max(displayed_data)
        y_min = max(0, y_min - y_min_buffer)  # Add buffer
        y_max += y_max_buffer

        ax.clear()

        # Plot spikes in a different color
        spike_indices = [i for i, value in enumerate(displayed_data) if value > spike_threshold]
        non_spike_indices = [i for i, value in enumerate(displayed_data) if value <= spike_threshold]

        if non_spike_indices:
            ax.plot(
                np.array(non_spike_indices),
                np.array(displayed_data)[non_spike_indices],
                color="green",
                linewidth=1.5,
                label="Normal Signal",
                antialiased=True,
            )
        if spike_indices:
            ax.plot(
                np.array(spike_indices),
                np.array(displayed_data)[spike_indices],
                color="red",
                linewidth=1.5,
                label="Spike",
                antialiased=True,
            )

        ax.set_title("Real-Time Signal Plot", fontsize=14)
        ax.set_xlabel("Samples", fontsize=12)
        ax.set_ylabel("Amplitude", fontsize=12)
        ax.set_xlim(x_min, x_max)
        ax.set_ylim(y_min, y_max)
        ax.grid(True, which="both", linestyle="--", linewidth=0.5, alpha=0.7)
        ax.legend()
        canvas.draw()

    root.after(100, update_plot)  # Schedule the next update in 100 ms


def start_resting():
    """Start tracking resting signals."""
    global is_resting, is_active, resting_data
    if is_active:
        messagebox.showwarning("Warning", "Stop activity tracking first!")
        return
    resting_data = []
    is_resting = True


def stop_resting():
    """Stop tracking resting signals and analyze data."""
    global is_resting, resting_data
    is_resting = False
    analysis = analyze_data(resting_data, "Resting")
    if analysis:
        save_analysis(analysis, "resting_analysis.txt")
        messagebox.showinfo("Resting Analysis", f"Analysis saved to resting_analysis.txt\n{analysis}")


def start_activity():
    """Start tracking activity signals."""
    global is_resting, is_active, activity_data
    if is_resting:
        messagebox.showwarning("Warning", "Stop resting tracking first!")
        return
    activity_data = []
    is_active = True


def stop_activity():
    """Stop tracking activity signals and analyze data."""
    global is_active, activity_data, resting_data
    is_active = False
    analysis = analyze_data(activity_data, "Activity")
    if analysis:
        # Compare with resting data
        resting_avg = np.mean(resting_data) if resting_data else 0
        elevated_signals = len([x for x in activity_data if x > resting_avg])
        analysis["elevated_signals"] = elevated_signals
        save_analysis(analysis, "activity_analysis.txt")
        messagebox.showinfo("Activity Analysis", f"Analysis saved to activity_analysis.txt\n{analysis}")


def on_closing():
    """Handle the window close event."""
    global is_running
    is_running = False
    root.destroy()


# GUI setup
root = tk.Tk()
root.title("Real-Time Signal Plot with Analysis")

# Create a matplotlib figure
fig = Figure(figsize=(10, 6), dpi=100)
ax = fig.add_subplot(111)
ax.set_title("Real-Time Signal Plot", fontsize=14)
ax.set_xlabel("Samples", fontsize=12)
ax.set_ylabel("Amplitude", fontsize=12)

# Embed the matplotlib figure in the Tkinter canvas
canvas = FigureCanvasTkAgg(fig, master=root)
canvas_widget = canvas.get_tk_widget()
canvas_widget.pack(fill=tk.BOTH, expand=True)

# Add Control Buttons
button_frame = tk.Frame(root)
button_frame.pack(fill=tk.X, padx=10, pady=10)

resting_start_button = tk.Button(button_frame, text="Start Resting", command=start_resting)
resting_start_button.pack(side=tk.LEFT, padx=5)

resting_stop_button = tk.Button(button_frame, text="Stop Resting", command=stop_resting)
resting_stop_button.pack(side=tk.LEFT, padx=5)

activity_start_button = tk.Button(button_frame, text="Start Activity", command=start_activity)
activity_start_button.pack(side=tk.LEFT, padx=5)

activity_stop_button = tk.Button(button_frame, text="Stop Activity", command=stop_activity)
activity_stop_button.pack(side=tk.LEFT, padx=5)

# Start serial reading in a separate thread
start_serial_thread()

# Schedule the plot updates
update_plot()

# Handle window close
root.protocol("WM_DELETE_WINDOW", on_closing)

# Run the GUI event loop
root.mainloop()
