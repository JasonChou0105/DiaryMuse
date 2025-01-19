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

        # pyautogui.moveTo(677, 882)
        # pyautogui.click()
        # time.sleep(65)  # Add a small delay for the action to process
        
        pyautogui.moveTo(1865, 276) #menu
        pyautogui.click()
        time.sleep(0.5)
        
        pyautogui.moveTo(1761, 517) #downloads
        pyautogui.click()
        time.sleep(0.5)

        pyautogui.moveTo(722, 416) #dropdown
        pyautogui.click()
        time.sleep(0.5)

        pyautogui.moveTo(702, 488) #select
        pyautogui.click()
        time.sleep(0.5)

        pyautogui.moveTo(732, 644) #right click
        pyautogui.rightClick()
        time.sleep(0.5)

        pyautogui.moveTo(751, 613) #inspect
        pyautogui.click()
        time.sleep(0.5)

        pyautogui.moveTo(1488, 309) #copy
        time.sleep(3)
        pyautogui.doubleClick()
        time.sleep(1)
        pyautogui.hotkey("ctrl", "c")
        time.sleep(1)

        clipboard_data = pyperclip.paste()
        print(jsonify({"message": "Actions performed successfully", "file": clipboard_data}))

        # Return the clipboard contents as JSON
        return jsonify({"message": "Actions performed successfully", "file": clipboard_data}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
