# King Oyster 
## Bot logs
Code logs are important things among developers. Since I'm not using github this time around (bc I don't need it for hosting and I'm lazy), I'll be outlining the different versions of the bot with all changes made along the way here. 

###  v0.1.05 
- 🐛 **Bug:** Bot doesn't reply to messages send in replies to others
- 📚 **Libraries:** Google authentication renewal
- ✨ **Feature:** Bot reacts to keywords, `@ everyone` messages (based on channel), attachments (also based on channel), and etc. 
- ✨ **Feature:** King oyster can now detect haikus (not perfect with syllable counting… it's just a bot afterall ;-; ). Just type a haiku and it'll jump at you if it detects it.

###  v0.1.06:
- ✨ **Feature:** Syllable counter (count syllables for any poem when prompted), to try out reply to a message and say `@King Oyster#0093 count syllables`
- ✨ **Feature:** Generate QR code, to try out use slash command or type `qr https://example.com SCALE COLOR-HEX BG-COLOR-HEX` (you can leave anything after the link out of it if you want to)
- ~~**Feature:** Add new creative resources to King Oyster~~ ***Bad Idea*** ❌ (would need constant updates)
- ✨ **Feature *Update:*** Improve the inspirator, figured there's no use for the adverb in there. Use through `/inspire` command or type `@King Oyster#0093 give me some inspiration` (keywords: `inspire`, `inspiration`)
___
## Code Documentations
These documentations are written as of version **V0.1.06** of King Oyster Bot.

TOC:
1. Workspace
2. Node packages
3. Slash commands
   - `/report: [USERNAME, REASON, ATTACHMENTS (optional)]`
   - `/add-officer: [USERNAME]`
   - `/deadline: []`
   - `/requirements: []`
   - `/submit: [TITLE, AUTHOR, TYPE, INFO, SUBMISSION, LINK (optional)]`
   - `/schedule: []`
   - `/officehours: []`
   - `/appointment: [MONTH, DATE, HOUR, DESCRIPTION (optional)]`
   - `/rules: []`
   - `/linkperm: [LINK]`
   - `/suggest: [ACTIVITY, INFO]`
   - `/roll: [MAX (optional)]`
   - `/INSPIRE: []`
   - `/QUOTE: []`
   - `/QR-CODE: [URL, SCALE (optional), COLOR (optional), COLOR-BG (optional)]`
4. 

___

# Workspace
The directory is organized as follows:
<img width="180" alt="image" src="https://github.com/user-attachments/assets/1a5b4811-3338-40ee-9a9e-977cfe6327bc" />

## src/ index.js
The heart of King Oyster, the main breain— this file contains main code for bot. 
This file includes Google authentication, working with Google Drive & Spreadhseets, imports dependencies, sets bot status, connects to `quotes.txt` file, listens to interactions and created messages.
<br>TODO link google authentication site & .env
<br>TODO link Node Packages 

## src/ quotes.txt
Lists quotes to be used in `index.js`.
<br>See `/quote` slash command.
<br>TODO link command

## src/ register-commands.js
Registers slash commands.
<br>Run the following command _once_ to register commands with a server:
```curl
node src/register-commands.js
```
Make sure to adjust the server ID in `.env` file.
<br>See Slash Commands section for more info on slash commands.
<br>TODO link slash commands

## .env
Contains all secrets. 
<br>This file contains:
- `TOKEN`: The bot token, aka the Oyster's password.
- `GUILD_ID`: The Discord server ID. Useful when registering slash commands with a new server.
- `CLIENT_ID`: Oyster's user ID, not very important and I probably don't use.
- `DRIVE_API_KEY`: Google Authentication API key. 
- `DRIVE_CLIENT_ID`: Google authentication client ID. 
- `DRIVE_CLIENT_SECRET`: Google authentication secret, aka the password for the authentication process.
- `DRIVE_REDIRECT_URI`: Redirecting URI to authentication link for handling API request
- `DRIVE_REFRESH_TOKEN`: Authentication token. May need to refresh after updating bot. See [src/index.js](##src/index.js) TODO link here
- `DRIVE_FOLDER_ID`: ID for google drive folder. We don't use this one really in the code– but might be useful in later versions. ID derived from directory url.
- `DRIVE_FOLDER_ID_1`: **Writing** submissions folder ID; derived from directory url.
- `DRIVE_FOLDER_ID_2`: **Visual** submissions folder ID; derived from directory url.
- `DRIVE_FOLDER_ID_3`: **Audio** submissions folder ID; derived from directory url.
- `DRIVE_FOLDER_ID_4`: **Video** submissions folder ID; derived from directory url.
- `DRIVE_FOLDER_ID_5`: **Other** submissions folder ID; derived from directory url.
- `SPREADSHEET_ID`: Spreadsheet file ID, used for information on room number, meeting times, office hours, deadline, etc. Derived from spreadsheet url.

## package.json & package-lock.json files + node_modules directory
`package.json` contains version number of dependencies, while `package-lock.json` includes more info on packages used, connecting back to `node_modules` directory, which includes all the packages used in the project.
<br>TODO mention node commands here
<br>TODO link Node Packages section

___

# Node Packages
Node Packages are outside libraries imported into our code to assist with specific tasks. The libraries have been installed through NPM. You may run `npm ls` to get a list of all current node packages, or `npm outdated` to search for any outdated packages. 

**DiscordBot**
<br><kbd>
<br>├── <kbd>axios@1.7.9</kbd> Creating HTTP requests 
<br>├── <kbd>discord.js@14.17.3</kbd> Main Discord bot library. 
<br>├── <kbd>dotenv@16.4.7</kbd> Working with environmental variables. 
<br>├── <kbd>fetch@1.1.0</kbd> Fetching url contents (UNUSED PACKAGE?) 
<br>├── <kbd>fs@0.0.1</kbd> Used for reading file within directory. 
<br>├── <kbd>googleapis@144.0.0</kbd> Used for Google authentication & connecting to Google tools. 
<br>├── <kbd>path@0.12.7</kbd> Assists with tracking file paths. 
<br>└── <kbd>qrcode@1.5.4</kbd> Generate & work with QR codes. 
</kbd>

___
# Slash Commands
Slash commands are a list of pre-defined commands that can be used to interact with the bot. 
<img width="795" alt="image" src="https://github.com/user-attachments/assets/aea8cd47-814b-452c-a80d-1ffdc8fb9291" />


   - `/report: [USERNAME, REASON, ATTACHMENTS (optional)]`
   - `/add-officer: [USERNAME]`
   - `/deadline: []`
   - `/requirements: []`
   - `/submit: [TITLE, AUTHOR, TYPE, INFO, SUBMISSION, LINK (optional)]`
   - `/schedule: []`
   - `/officehours: []`
   - `/appointment: [MONTH, DATE, HOUR, DESCRIPTION (optional)]`
   - `/rules: []`
   - `/linkperm: [LINK]`
   - `/suggest: [ACTIVITY, INFO]`
   - `/roll: [MAX (optional)]`
   - `/INSPIRE: []`
   - `/QUOTE: []`
   - `/QR-CODE: [URL, SCALE (optional), COLOR (optional), COLOR-BG (optional)]`


