# TikTok Multi-Video Downloader

This script utilizes Puppeteer, a Node.js package, to automate the download of multiple TikTok videos simultaneously.

## How to Run

1. **Clone this Repository:**
   - If you're unfamiliar with cloning, follow the instructions [here](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop).

2. **Open Terminal:**
   - Open your terminal or command prompt.

3. **Navigate to the Project Folder:**
   - Use the `cd` command to direct the terminal to the location where you cloned the repository.

4. **Install Node.js and Required Packages:**
   - Ensure Node.js is installed on your computer.
   - Install the required packages using the following command:
     ```bash
     npm i puppeteer axios fs path readline
     ```

5. **Run the Script:**
   - Execute the `index.js` file using the following command:
     ```bash
     node index
     ```

6. **Enter TikTok Video Links:**
   - The script will prompt you to enter TikTok video links. Provide the links separated by commas (`,`), without any spaces.
     ```plaintext
     Example:
     https://www.tiktok.com/@tate_arthur/video/7153370139759594798?is_from_webapp=1&sender_device=pc&web_id=7218885320183121410,
     https://www.tiktok.com/@sillz/video/7180037715709152555?is_from_webapp=1&sender_device=pc&web_id=7218885320183121410,
     https://www.tiktok.com/@valon.jon/video/7221268411400146182?is_from_webapp=1&sender_device=pc&web_id=7218885320183121410
     ```

7. **Video Download:**
   - After running the script, the videos will be downloaded to a folder named 'videos' (you have to create a `videos` folder in the same project root before running the file)

*Note: Ensure that Node.js is installed and the required packages are installed before running the script. If you need help obtaining TikTok video links, refer to [this guide](https://www.groovypost.com/howto/copy-a-link-in-tiktok/).*

# Disclaimer

**Important:** This script is developed for educational and personal use only. The developers of this script do not endorse or encourage the violation of any TikTok policies or terms of service. The use of this script to download TikTok videos must comply with TikTok's terms and conditions.

**Note:** TikTok's policies may change, and it is the responsibility of the user to ensure that their use of this script aligns with the latest TikTok policies. The developers are not responsible for any misuse, violations, or legal consequences resulting from the use of this script.

By using this script, you acknowledge and accept the risks associated with potential policy violations and agree to use it responsibly and in accordance with TikTok's terms of service.

This script is provided as-is, without any warranties or guarantees. The developers are not liable for any damages or legal implications arising from the use of this script.

**Use at your own risk.**

Feel free to reach out if you encounter any issues or have questions!
