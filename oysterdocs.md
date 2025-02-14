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
- `DRIVE_REFRESH_TOKEN`: Authentication token. May need to refresh after updating bot. See [src/index.js](#src-indexjs)
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
Slash commands are a list of pre-defined commands that can be used to interact with the bot. <br> 
These commands can also come with different input parameters accordingly (see [src/register-commands.js](#src-register-commandsjs)).<br>

To start using commands, all you need to do is start typing a message with the character `/`, then you can select the command you wish to use.
<br><img width="795" alt="image" src="https://github.com/user-attachments/assets/aea8cd47-814b-452c-a80d-1ffdc8fb9291" />

The purpose of each command is listed below.

## <kbd>`/report` <kbd>USERNAME</kbd> <kbd>REASON</kbd> <kbd>ATTACHMENTS (optional)</kbd> </kbd>
Report <kbd>USERNAME</kbd> for <kbd>REASON</kbd>, and optionally attach <kbd>ATTACHMENTS</kbd> as proof.
<br>If the <kbd>USERNAME</kbd> (being reported) is an **officer**, then the bot will let the user know that they might've made a mistake.

<br><img width="499" alt="image" src="https://github.com/user-attachments/assets/16c13543-8bfa-49e6-98af-bc6e38d1a542" />

<br>Despite this, the report is _still send._ When a report is send, the bot will search for a channel with the name `bot-reports`. If this channel doesn't exist, the bot is smart enough to create it, while restricting access to it by regular members (allowing only officers to view it).
<br>The report will include the <kbd>USERNAME</kbd> display name and user ID, along with the user's username, their <kbd>REASON</kbd>, and an <kbd>ATTACHMENT</kbd> if provided.

<br>In the case that the user (sending the report) was an officer, then the <kbd>USERNAME</kbd> will be automatically muted for **10 minutes** after the report is send.

## <kbd>`/add-officer` <kbd>USERNAME</kbd> </kbd>
Command to give the officer role to a member. User must be an officer to be able to use this command.
<br>✅ If the user is an officer, then <kbd>USERNAME</kbd> will be assigned an officer role. 
<br>❌ If the user is NOT an officer, they will be notified that only officers are able to run this command.

## <kbd>`/deadline` </kbd>
This command will inform the user of the C&K magazine submissions deadline, along with a countdown.
<br>Button interactions can lead user to [submission requirements](#requirements-), or the submissions form.

<br><img width="789" alt="image" src="https://github.com/user-attachments/assets/30d5814a-7abb-4e22-8bc0-a0ecbf9eb721" />

> Can be activated through chat messages by replying to or mentioning `@King Oyster#0093`, using keywords: 
> <kbd>deadline</kbd> or <kbd>submission</kbd> AND EITHER <kbd>time</kbd> OR <kbd>when</kbd>

## <kbd>`/requirements` </kbd>
This command will inform the user of the C&K magazine submissions' requirements.
<br>Button interactions can lead user to [deadline](#deadline-), or the submissions form.

> Can be activated through chat messages by replying to or mentioning `@King Oyster#0093`, using keywords: 
> <kbd>submission</kbd> or <kbd>requirements</kbd>

## <kbd>`/submit` <kbd>TITLE</kbd> <kbd>AUTHOR</kbd> <kbd>TYPE</kbd> <kbd>INFO</kbd> <kbd>SUBMISSION</kbd> <kbd>LINK (optional)</kbd> </kbd>
Submit a piece to the magazine.
<br>The <kbd>SUBMISSION</kbd> file will be sent to Google drive, along with other submissions (see TODO link drive section).
<br>Before being send into the drive, the submission will be sorted into different folders based on the chosen <kbd>TYPE</kbd>:
1. Writing
2. Visual
3. Video
4. Audio
5. Other

The <kbd>SUBMISSION</kbd> file will also be renamed into the title of the piece, followed by an underscore and the default file name.
<br>Nevertheless, in case our bot faces issues submitting the piece to the drive, and as a backup, Oyster automatically sends all submissions in a separate, private channel, called "bot-submissions." This will include the user's username, the piece's <kbd>TITLE</kbd> and <kbd>AUTHOR</kbd> (name published under), all hidden behind spoilers, along with the submission <kbd>TYPE</kbd>, extra <kbd>INFO</kbd>, a <kbd>LINK</kbd> if included, and obviously the <kbd>SUBMISSION</kbd> if attached.

It's unlikely that the bot would ever have issues with uploading the <kbd>SUBMISSION</kbd>, unless if the <kbd>SUBMISSION</kbd> is very large in size. To prevent issues, we stop the bot from sending an attachment of the <kbd>SUBMISSION</kbd> in the **bot-submissions** channel if it's _**over 200 MB in size!**_ The bot would still attempt to upload the file to google drive, in which it should succeed but at a slower rate. This is a rare case in which we'd advise to use the <kbd>LINK</kbd> option to share your piece (and for <kbd>SUBMISSION</kbd> you can submit a simple thumbnail).

-# **Note:** If the **bot-submissions** channel doesn't exist, the bot is smart enough to create it and set permissions accordingly.

## <kbd>`/schedule` </kbd>
This command will inform the user of the meeting time and location of our regular C&K member meetings, along with the exact meeting time of the next meeting.
<br> 🐛 TODO fix bug with time (hosting service & discord have different timezones which SUCKS btw bc I spend hours trying to fix this for the deadline and just now realized it's the same issue for this)

> Can be activated through chat messages by replying to or mentioning `@King Oyster#0093`, using keywords: 
> <kbd>schedule</kbd> or <kbd>meet</kbd> AND <kbd>time</kbd> or <kbd>when</kbd> or <kbd>where</kbd> 
   
## <kbd>`/officehours` </kbd>
Get the location and time of our office hours for the semester.
<br>This command connects to a Google spreadsheet, where officers can input their office hours times without needing to touch the code.
<br>Same case for infortmation included in the [deadline](#deadline-) and [schedule](#schedule-) commands. (TODO check links here)

> Can be activated through chat messages by replying to or mentioning `@King Oyster#0093`, using keywords: 
> <kbd>officehours</kbd> or <kbd>office hours</kbd> or <kbd>office-hours</kbd>

## <kbd>`/appointment` <kbd>MONTH</kbd> <kbd>DATE</kbd> <kbd>HOUR</kbd> <kbd>DESCRIPTION</kbd> </kbd>
Set an appointment to meet with an officer in <kbd>MONTH</kbd>, <kbd>DATE</kbd>, at <kbd>HOUR</kbd>. The appointment is then treated as a report, and will be send to the reports channel for an officer to check (see `/REPORT ...` command). Along with the user info and appointment time, the report will also include the <kbd>DESCRIPTION</kbd>. As a matter of fact, the bot response send privately to the user is identical to the report the officers recieve (see image below).

<br><img width="816" alt="image" src="https://github.com/user-attachments/assets/59d2295c-26e3-4485-a2a3-5e9efd792eb7" />


## <kbd>`/rules` </kbd>
Command will help the user find the server rules. 
<br>The bot will also give the user the option to navigate to the [Discord Guidelines]([url](https://discord.com/guidelines)) or view [MCC Policies]([url](https://www.monroecc.edu/depts/policy/)) with the click of a button.

<br><img width="651" alt="image" src="https://github.com/user-attachments/assets/3ac8424e-3ecc-405f-a791-b3ccb5b9bf81" />

> Can be activated through chat messages by replying to or mentioning `@King Oyster#0093`, using keywords: 
> <kbd>rules</kbd>

## <kbd>`/linkperm` <kbd>LINK</kbd> </kbd>
Request permission to post links.
<br>This will send a report to the same **bot-report** channel used by the `/report...` and `/appointment...` commands.
<br>The request will look as follows:

<br><img width="812" alt="image" src="https://github.com/user-attachments/assets/88226795-59b4-44fb-97bf-2a36932901ed" />

<br>To accept, after reviewing the link, a mod, aka officer, can give the user a __**@link perm**__ role. 
<br>This role will allow the user to post links without being stopped by the bot.

<br>Please note that certain links, such as youtube and tenor urls (GIFs) are allowed without needing link perms (see `allowedLinks` array in code).

## <kbd>`/suggest` <kbd>ACTIVITY</kbd> <kbd>INFO</kbd> </kbd>
Suggest an <kbd>ACTIVITY</kbd> for us to do during our weekly member meetings, along with extra <kbd>INFO</kbd> on how the activity works.
<br>Similar to `report...`, `/appointment ...`, and `/linkperm ...` commands, this command will send the suggestion as a report in the **bot-reports** channel in the format shown below.

<br><img width="817" alt="image" src="https://github.com/user-attachments/assets/d9ce1105-07a8-4d46-994f-d844714adaec" />


## <kbd>`/roll` <kbd>MAX (optional)</kbd> </kbd>
Roll a dice and get a random number. Optionally, you can adjust the range of possible values from the roll by adjusting the <kbd>MAX</kbd> sides of the die.

<br><img width="661" alt="image" src="https://github.com/user-attachments/assets/a0dc9e37-6766-4b1f-bc5d-065ec48004bc" />


## <kbd>`/inspire` </kbd>
Get a random adjective and noun to help spark some inspiration ✨
<br>Don't like what you see? With the click of a button you can spin the wheel once again.

<br><img width="309" alt="image" src="https://github.com/user-attachments/assets/473ea3be-864d-4848-b169-85113b43c9ca" />

<sup>**Note:** See `getRandomInspiration(...)` function in code, `noun` and `adjective` variables.</sup>

> Can be activated through chat messages by replying to or mentioning `@King Oyster#0093`, using keywords: 
> <kbd>inspire</kbd> or <kbd>inspiration</kbd>

## <kbd>`/quote` </kbd>
Wanna feel some wisedom? Then get a random quote from a set of 40+ pre-selected quotes (saved in [quotes.txt](TODO link quotes.txt) file).
<br>Don't like what you see? Worry not you ungrateful child, for I have an <kbd>Another Quote</kbd> only for you.

<br><img width="451" alt="image" src="https://github.com/user-attachments/assets/7ba96f4e-b587-4911-97e8-06c7003940c2" />

> Can be activated through chat messages by replying to or mentioning `@King Oyster#0093`, using keywords: 
> <kbd>quote</kbd>

## <kbd>`/qr-code` <kbd>URL</kbd> <kbd>SCALE (optional)</kbd> <kbd>COLOR (optional)</kbd> <kbd>COLOR-BG (optional)</kbd> </kbd>
Have Oyster generate you a QR code that redirects to <kbd>URL</kbd>, along with a few optional inputs, such as <kbd>SCALE</kbd> of the QR code image (default: 20), and the <kbd>COLOR</kbd> of the QR code (HEX code recommended), and <kbd>COLOR-BG</kbd> for the QR code background (transparent by default). 

<br>See image below for an example of how QR code can be generated WITHOUT using the slash command, but rather by sending a text message.

<br><img width="496" alt="image" src="https://github.com/user-attachments/assets/88cd37bb-86d2-4278-a34d-38d2ee4cc9c5" />

<sup>**Note:** In the image above, I could've also included the <kbd>COLOR-BG</kbd> at the end, but chose not to so the background defaulted to transparent. </sup>

The slash command works the same way as the text command, except if you generate a QR code with the slash commands, the message is hidden and can only be viewed by you.

> Can be activated through chat messages by sending a message that
> STARTS WITH <kbd>qr </kbd>
