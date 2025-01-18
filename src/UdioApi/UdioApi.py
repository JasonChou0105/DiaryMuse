import json
import pyautogui
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_request():
    try:
        # Step 1: Receive JSON from the request
        data = request.get_json()

        # Step 2: Extract and perform actions
        x, y = data.get('click_position', (100, 100))  # Default click at (100, 100)
        pyautogui.moveTo(x, y)
        pyautogui.click()

        # Optional: Paste data if provided
        text_to_paste = data.get('paste_text')
        if text_to_paste:
            pyautogui.typewrite(text_to_paste)

        # Step 3: Simulate copying an embed
        pyautogui.hotkey('ctrl', 'c')  # Simulate Ctrl+C
        embed_data = "Embed code placeholder"  # Replace with actual copied data logic

        # Step 4: Return response
        response = {
            "status": "success",
            "embed_code": embed_data
        }
        return jsonify(response)

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
