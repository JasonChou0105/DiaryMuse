from flask import Flask, request, jsonify
import pyautogui
import time
import pyperclip  # To interact with the clipboard

app = Flask(__name__)

@app.route('/perform-actions', methods=['POST'])
def perform_actions():
    try:
        # Parse the JSON payload
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid JSON payload"}), 400

        description = data.get("description", "")
        lyrics = data.get("lyrics", "")

        pyautogui.moveTo(263, 191)
        pyautogui.click()
        pyautogui.typewrite(description)
        time.sleep(0.5)  # Add a small delay for the action to process

        pyautogui.moveTo(323, 623)
        pyautogui.click()
        pyautogui.typewrite(lyrics)
        time.sleep(0.5)  # Add a small delay for the action to process

        pyautogui.moveTo(677, 882)
        pyautogui.click()
        time.sleep(60)  # Add a small delay for the action to process
        
        pyautogui.moveTo(1865, 276)
        pyautogui.click()
        time.sleep(0.5)
        
        pyautogui.moveTo(1751, 460)
        pyautogui.click()
        time.sleep(0.5)

        pyautogui.moveTo(705, 321)
        pyautogui.click()
        time.sleep(0.5)

        pyautogui.moveTo(1176, 451)
        pyautogui.click()
        time.sleep(0.5)

        clipboard_data = pyperclip.paste()

        # Return the clipboard contents as JSON
        return jsonify({"message": "Actions performed successfully", "embed": clipboard_data}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
