# Chrome Extension: Tab Info to Line Notify

This is a Chrome extension that captures information about the currently active tab and sends it to Line using the Line Notify API.

<img width="434" alt="image" src="https://github.com/jchang6513/line-notify-extension/assets/31400914/e766701a-5f23-4f25-a0c3-9793c06c3ee0">


## Installation

1. Download or clone this repository to your local machine.

2. Open Google Chrome and go to `chrome://extensions`.

3. Enable the "Developer mode" by toggling the switch in the upper right corner.

4. Click on "Load unpacked" and select the directory where you have the extension files.

5. The extension should now be installed and visible in the Chrome extensions menu.

## Configuration

Before using the extension, you need to configure it with your Line Notify API access token. Follow these steps:

1. Obtain an access token from Line Notify by registering an account and creating a new Line Notify service.

2. Open the extension's options by right-clicking on the extension icon in the Chrome toolbar and selecting "Options".

3. Enter your Line Notify access token in the designated field.

4. Save the options.

## Usage

1. Click on the extension icon in the Chrome toolbar to activate the extension.

2. When you want to capture the information of the currently active tab, click on the extension icon again.

3. The extension will retrieve the title and URL of the active tab and send it to Line Notify using the configured access token.

## Support and Contributions

If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize and expand upon this README according to the specific details and requirements of your Chrome extension.
