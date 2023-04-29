# tiktok-multi-videos-downloader
This code using Puppeteer (nodejs package) to automatic download multi tiktok videos at once.

How to run 

1. Clone this repository (don't know how to clone, visit this https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
2. Open termnial 
3. Direct the folder location (using cd command)
*if you're running this file for the very first beginning make sure you install nodejs on your company, and install these packages: puppeteer,axios,fs,path,readline
** npm i puppeteer,axios,fs,path,readline ==> this command line helps you to install all required packages for this project 

4. Run index.js file
node index

5. After run the above file, system will require you to enter the tiktok video links you want to download, I'll give you example how to enter the link for the following:

Example: 

https://www.tiktok.com/@tate_arthur/video/7153370139759594798?is_from_webapp=1&sender_device=pc&web_id=7218885320183121410,https://www.tiktok.com/@sillz/video/7180037715709152555?is_from_webapp=1&sender_device=pc&web_id=7218885320183121410,https://www.tiktok.com/@valon.jon/video/7221268411400146182?is_from_webapp=1&sender_device=pc&web_id=7218885320183121410

*Each link will be devided by a commma and no space between them 
**How to get tiktok video link, visit this: https://www.groovypost.com/howto/copy-a-link-in-tiktok/

6. After run index file, videos will be downloaded to the folder names 'videos' 
