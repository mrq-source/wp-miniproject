const skills = [
    {
        id: "computer",
        icon: "🖥️",
        title: "Computer Basics",
        description: "Understand what a computer is, its main parts, and how it handles information.",
        lessons: [
            {
                title: "What Is a Computer?",
                content: `
                    <p>A <strong>computer</strong> is an electronic device that accepts information, works with it, and gives us a result. We use computers for studying, writing documents, watching videos, communicating, and many other activities.</p>
                    <h3>What can a computer do?</h3>
                    <ul>
                        <li><strong>Input:</strong> Receive information, such as text typed on a keyboard.</li>
                        <li><strong>Processing:</strong> Work with information by following instructions.</li>
                        <li><strong>Output:</strong> Show results on a screen or play sounds through speakers.</li>
                        <li><strong>Storage:</strong> Keep files so we can use them later.</li>
                    </ul>
                    <p><strong>Example:</strong> When you type an essay, the keyboard sends your typing to the computer. The computer processes it, displays the words on the monitor, and can save the essay as a file.</p>
                    <h3>Where are computers used?</h3>
                    <ul>
                        <li><strong>Schools:</strong> Writing notes, learning online, and making projects.</li>
                        <li><strong>Banks:</strong> Keeping records and helping customers.</li>
                        <li><strong>Hospitals:</strong> Storing patient records and running machines.</li>
                        <li><strong>Farming:</strong> Checking weather, crop prices, and government schemes.</li>
                        <li><strong>Homes:</strong> Watching videos, talking to family, and paying bills.</li>
                    </ul>
                    <h3>Hardware and software</h3>
                    <p><strong>Hardware</strong> is the parts of a computer that you can touch, such as the keyboard and monitor. <strong>Software</strong> is the programs and instructions that tell the hardware what to do, such as a browser or a word processor.</p>
                    <p>Computers include desktops, laptops, tablets, and smartphones.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>A computer follows the steps: Input, Processing, Output, Storage.</li>
                            <li>Hardware you can touch. Software you cannot touch.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Look around your home or school. Name three things that work like a computer. Is a smartphone a computer?</p>
                    </div>
                `,
                question: "Which activity is an example of computer storage?",
                options: [
                    "Saving an essay for later",
                    "Moving the mouse pointer",
                    "Looking at the monitor"
                ],
                answer: 0
            },
            {
                title: "Main Parts of a Computer",
                content: `
                    <p>A computer system has several parts. Each part has a different job.</p>
                    <ul>
                        <li><strong>Monitor:</strong> Displays text, pictures, and videos.</li>
                        <li><strong>Keyboard:</strong> Lets you type letters, numbers, and commands.</li>
                        <li><strong>Mouse:</strong> Lets you move the pointer and select items.</li>
                        <li><strong>System unit (CPU box):</strong> Contains important components, including the processor and memory.</li>
                        <li><strong>Speakers:</strong> Play sound.</li>
                        <li><strong>Printer:</strong> Produces paper copies of documents or pictures.</li>
                    </ul>
                    <h3>Inside the system unit</h3>
                    <ul>
                        <li><strong>Processor (CPU):</strong> The "brain" of the computer. It follows instructions.</li>
                        <li><strong>Memory (RAM):</strong> Holds the work you are doing right now. It is cleared when the computer turns off.</li>
                        <li><strong>Storage (hard drive or SSD):</strong> Keeps your files even when the computer is off.</li>
                        <li><strong>Power supply:</strong> Gives electricity to all the parts.</li>
                    </ul>
                    <h3>Input and output</h3>
                    <p><strong>Input devices</strong> send information to a computer. Examples include keyboards, mice, and microphones.</p>
                    <p><strong>Output devices</strong> present information from a computer. Examples include monitors, printers, and speakers.</p>
                    <p>A touchscreen can act as both an input and an output device.</p>
                    <h3>Turning a computer on and off safely</h3>
                    <ol>
                        <li>Press the power button to turn on.</li>
                        <li>Wait for the screen to finish loading.</li>
                        <li>Save your work when you are finished.</li>
                        <li>Use <strong>Shut down</strong> from the Start menu. Do not just pull the plug.</li>
                    </ol>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Input devices send information in. Output devices show information out.</li>
                            <li>RAM is temporary. Storage is permanent.</li>
                            <li>Always shut down properly.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Make two lists: input devices and output devices. Put the mouse, printer, keyboard, speakers, and monitor in the correct list.</p>
                    </div>
                `,
                question: "Which of these is an output device?",
                options: ["Keyboard", "Monitor", "Mouse"],
                answer: 1
            }
        ]
    },
    {
        id: "keyboard",
        icon: "⌨️",
        title: "Keyboard & Mouse",
        description: "Learn common keyboard keys and basic mouse actions.",
        lessons: [
            {
                title: "Getting to Know the Keyboard",
                content: `
                    <p>A keyboard is used to enter text, numbers, and commands.</p>
                    <h3>Important keys</h3>
                    <ul>
                        <li><strong>Letter and number keys:</strong> Type letters and numbers.</li>
                        <li><strong>Spacebar:</strong> Adds spaces between words.</li>
                        <li><strong>Enter:</strong> Starts a new line or confirms a selection.</li>
                        <li><strong>Backspace:</strong> Deletes the character to the left of the cursor.</li>
                        <li><strong>Delete:</strong> Deletes the character to the right or a selected item.</li>
                        <li><strong>Shift:</strong> Helps type capital letters and upper symbols.</li>
                        <li><strong>Caps Lock:</strong> Turns capital-letter typing on or off.</li>
                        <li><strong>Tab:</strong> Moves to the next box or adds a space gap.</li>
                        <li><strong>Esc:</strong> Cancels or closes something.</li>
                        <li><strong>Arrow keys:</strong> Move the cursor or selection.</li>
                    </ul>
                    <h3>Useful keyboard shortcuts</h3>
                    <ul>
                        <li><strong>Ctrl + C:</strong> Copy.</li>
                        <li><strong>Ctrl + V:</strong> Paste.</li>
                        <li><strong>Ctrl + X:</strong> Cut.</li>
                        <li><strong>Ctrl + Z:</strong> Undo (go back one step).</li>
                        <li><strong>Ctrl + A:</strong> Select everything.</li>
                        <li><strong>Ctrl + S:</strong> Save.</li>
                        <li><strong>Ctrl + P:</strong> Print.</li>
                    </ul>
                    <h3>Tips for better typing</h3>
                    <ul>
                        <li>Sit straight and keep your wrists relaxed.</li>
                        <li>Place your fingers on the "home row" keys: A S D F and J K L ;</li>
                        <li>Look at the screen, not the keys, as you improve.</li>
                        <li>Practice a little every day. Speed comes with time.</li>
                    </ul>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Backspace deletes to the left. Delete removes to the right.</li>
                            <li>Ctrl + S saves your work. Save often!</li>
                            <li>Ctrl + Z can fix many mistakes.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Open Notepad. Type your name and your village or town. Select it with Ctrl + A, copy it with Ctrl + C, then paste it two times with Ctrl + V.</p>
                    </div>
                `,
                question: "Which key combination commonly saves your work on Windows?",
                options: ["Ctrl + S", "Ctrl + P", "Ctrl + X"],
                answer: 0
            },
            {
                title: "Using a Mouse",
                content: `
                    <p>A mouse controls the pointer on your screen.</p>
                    <h3>Mouse actions</h3>
                    <ul>
                        <li><strong>Single-click:</strong> Usually selects an item.</li>
                        <li><strong>Double-click:</strong> Often opens a file or folder.</li>
                        <li><strong>Right-click:</strong> Opens a menu of extra options.</li>
                        <li><strong>Scroll wheel:</strong> Moves a page up or down.</li>
                        <li><strong>Click and drag:</strong> Selects text or moves items where supported.</li>
                    </ul>
                    <h3>Parts of a mouse</h3>
                    <ul>
                        <li><strong>Left button:</strong> Used most of the time to select and open.</li>
                        <li><strong>Right button:</strong> Opens menus.</li>
                        <li><strong>Scroll wheel:</strong> Sits between the buttons.</li>
                    </ul>
                    <h3>The pointer changes shape</h3>
                    <ul>
                        <li><strong>Arrow:</strong> Normal use.</li>
                        <li><strong>Hand:</strong> You are over a link you can click.</li>
                        <li><strong>I-beam (like a letter I):</strong> You are over text you can select or type in.</li>
                        <li><strong>Circle or hourglass:</strong> The computer is busy. Please wait.</li>
                    </ul>
                    <h3>Laptop touchpad</h3>
                    <p>Many laptops have a touchpad instead of a mouse. Slide one finger to move the pointer. Tap once to click. Tap with two fingers to right-click. Slide two fingers up or down to scroll.</p>
                    <h3>Good mouse habits</h3>
                    <p>Keep your hand relaxed and move the mouse gently on a stable surface.</p>
                    <p><strong>Example:</strong> Double-click a folder to open it. Right-click it to see additional options.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Left-click selects. Double-click opens. Right-click shows a menu.</li>
                            <li>The pointer shape tells you what you can do.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>On your desktop, right-click an empty space. Look at the menu that appears. Then press Esc to close it. Now hover over a link in a web page and watch the pointer turn into a hand.</p>
                    </div>
                `,
                question: "What does right-clicking an item usually do?",
                options: [
                    "Opens a menu of extra options",
                    "Turns off the computer",
                    "Deletes every file"
                ],
                answer: 0
            }
        ]
    },
    {
        id: "files",
        icon: "📁",
        title: "Files & Folders",
        description: "Understand files, folders, and how to save your work.",
        lessons: [
            {
                title: "Understanding Files and Folders",
                content: `
                    <p>A <strong>file</strong> is saved information, such as a document, photo, song, or video. A <strong>folder</strong> groups files and other folders.</p>
                    <p>Think of a folder like a cupboard drawer. Inside it, you keep related papers together so they are easy to find.</p>
                    <h3>Common file types</h3>
                    <ul>
                        <li><strong>.docx:</strong> Word-processing documents.</li>
                        <li><strong>.txt:</strong> Plain text files.</li>
                        <li><strong>.pdf:</strong> Documents that preserve their layout.</li>
                        <li><strong>.xlsx:</strong> Spreadsheets.</li>
                        <li><strong>.jpg or .png:</strong> Image files.</li>
                        <li><strong>.mp3:</strong> Audio files.</li>
                        <li><strong>.mp4:</strong> Video files.</li>
                    </ul>
                    <p>The letters after the final dot in a filename are called the <strong>file extension</strong>. It tells the computer which program can open the file.</p>
                    <h3>Why use folders?</h3>
                    <p>You can create a folder called <em>School Work</em> and put separate subject folders inside it, such as <em>Maths</em>, <em>Science</em>, and <em>English</em>.</p>
                    <h3>Good file names</h3>
                    <ul>
                        <li>Use clear names such as <em>Science_Project</em> or <em>Maths_Homework</em>.</li>
                        <li>Avoid names like <em>New1</em> or <em>asdf</em>.</li>
                        <li>Add a date if you make many versions, such as <em>Report_2026</em>.</li>
                    </ul>
                    <h3>Common actions</h3>
                    <ul>
                        <li><strong>Create:</strong> Right-click an empty space, choose New, then Folder.</li>
                        <li><strong>Rename:</strong> Right-click the item and choose Rename.</li>
                        <li><strong>Copy or move:</strong> Use Ctrl + C then Ctrl + V (copy) or Ctrl + X then Ctrl + V (move).</li>
                        <li><strong>Delete:</strong> Moves the item to the Recycle Bin, where you can still restore it.</li>
                    </ul>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>A file holds information. A folder holds files.</li>
                            <li>The extension (like .pdf) shows the file type.</li>
                            <li>Clear names make files easy to find.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Create a new folder on your desktop called <em>My Learning</em>. Inside it, create two more folders called <em>Notes</em> and <em>Photos</em>.</p>
                    </div>
                `,
                question: "What is the main purpose of a folder?",
                options: [
                    "To organize files",
                    "To increase screen brightness",
                    "To type letters"
                ],
                answer: 0
            },
            {
                title: "Saving and Finding Documents",
                content: `
                    <p>Saving keeps your work so you can open it again later. <strong>Ctrl + S</strong> is a common save shortcut on Windows.</p>
                    <h3>Save a new document</h3>
                    <ol>
                        <li>Choose Save or Save As.</li>
                        <li>Choose the folder where you want the document stored.</li>
                        <li>Enter a meaningful filename.</li>
                        <li>Choose a file type if required.</li>
                        <li>Select Save.</li>
                    </ol>
                    <p><strong>Save</strong> usually updates an existing file. <strong>Save As</strong> lets you choose a name, location, or format.</p>
                    <h3>Find and manage files</h3>
                    <p>Use File Explorer on Windows to browse folders. You can create, rename, copy, move, and delete files.</p>
                    <h3>If you cannot find a file</h3>
                    <ul>
                        <li>Type part of the file name in the search box of File Explorer.</li>
                        <li>Check the <strong>Downloads</strong> and <strong>Documents</strong> folders.</li>
                        <li>Look in the <strong>Recycle Bin</strong> in case it was deleted.</li>
                        <li>Sort files by date to find the newest ones.</li>
                    </ul>
                    <h3>Backups</h3>
                    <p>A <strong>backup</strong> is an extra copy of your important files. If your computer breaks or is lost, you still have your work.</p>
                    <p>Keep backups of important files on a trusted external drive, a pen drive, or a reputable cloud storage service.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Save early and save often.</li>
                            <li>Use Save As to make a copy with a new name.</li>
                            <li>Keep a backup of important files.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Open Notepad and type a short sentence. Press Ctrl + S, save it inside your <em>My Learning</em> folder as <em>First_File</em>, then close Notepad. Find the file and open it again.</p>
                    </div>
                `,
                question: "How can you make an important document easier to find?",
                options: [
                    "Give it a clear name and save it in a known folder",
                    "Leave it unsaved",
                    "Give every file the same name"
                ],
                answer: 0
            }
        ]
    },
    {
        id: "internet",
        icon: "🌐",
        title: "Internet Basics",
        description: "Learn about browsers, websites, and searching online.",
        lessons: [
            {
                title: "The Internet, Websites, and Browsers",
                content: `
                    <p>The <strong>internet</strong> is a worldwide network connecting computers and other devices.</p>
                    <p>A <strong>website</strong> is a collection of related web pages. A <strong>web browser</strong> is a program used to visit websites. Examples include Chrome, Edge, Firefox, and Safari.</p>
                    <h3>What can you do online?</h3>
                    <ul>
                        <li>Learn new skills and study for exams.</li>
                        <li>Read news and check the weather.</li>
                        <li>Check crop prices and government services.</li>
                        <li>Talk to family and friends by email or video call.</li>
                        <li>Watch educational videos.</li>
                    </ul>
                    <h3>How to visit a website</h3>
                    <ol>
                        <li>Open a web browser.</li>
                        <li>Click the address bar at the top.</li>
                        <li>Type a website address and press Enter.</li>
                        <li>Wait for the page to load.</li>
                    </ol>
                    <h3>Parts of a browser</h3>
                    <ul>
                        <li><strong>Address bar:</strong> Where you type a website address.</li>
                        <li><strong>Tabs:</strong> Let you keep many pages open at once.</li>
                        <li><strong>Back and Forward buttons:</strong> Move between pages you visited.</li>
                        <li><strong>Refresh button:</strong> Loads the page again.</li>
                        <li><strong>Bookmarks:</strong> Save pages you want to visit again.</li>
                    </ul>
                    <p>A <strong>search engine</strong> helps you find information. A browser opens websites, while a search engine helps locate them.</p>
                    <h3>Connection basics</h3>
                    <p>Devices commonly connect using Wi-Fi or mobile data. Avoid entering sensitive information on networks you do not trust.</p>
                    <p><strong>Important:</strong> HTTPS encrypts a website connection, but it does not guarantee that the website is trustworthy.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>A browser opens websites. A search engine finds them.</li>
                            <li>Type addresses in the address bar, not the search box of a page.</li>
                            <li>Use trusted networks for private work.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Open your browser. Open a new tab with Ctrl + T. Visit a website you know. Then use the Back button to return to the previous page.</p>
                    </div>
                `,
                question: "What is a web browser used for?",
                options: [
                    "Visiting websites",
                    "Printing without a printer",
                    "Charging a laptop"
                ],
                answer: 0
            },
            {
                title: "Searching for Information Online",
                content: `
                    <p>Use specific words called <strong>keywords</strong> to find useful information online.</p>
                    <p><strong>Example:</strong> Search for <em>basic computer parts for beginners</em> instead of just <em>computer</em>.</p>
                    <h3>Improve your search</h3>
                    <ul>
                        <li>Use specific keywords.</li>
                        <li>Add a location or year if relevant.</li>
                        <li>Try different wording if results are not useful.</li>
                        <li>Read the actual page, not just its title.</li>
                        <li>Put exact phrases inside quotation marks, such as "how to save a file".</li>
                    </ul>
                    <h3>Understanding search results</h3>
                    <ul>
                        <li>Each result has a title, a web address, and a short summary.</li>
                        <li>Some results at the top may be advertisements. They are usually marked "Ad" or "Sponsored".</li>
                        <li>The first result is not always the best or most correct one.</li>
                    </ul>
                    <h3>Check information carefully</h3>
                    <p>Check who published the information, when it was updated, and whether evidence supports it. Compare important claims with reliable sources.</p>
                    <p>Be careful with unbelievable promises, urgent payment requests, and messages asking for personal information.</p>
                    <h3>Safe downloading</h3>
                    <p>Only download files and apps from official websites or trusted app stores. Free games, "cracked" software, and unknown files can contain harmful programs.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Specific keywords give better results.</li>
                            <li>Check at least two sources for important facts.</li>
                            <li>Do not trust everything you read online.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Search for "how to prepare for a job interview". Open two different results. Do they give the same advice? Which one looks more trustworthy, and why?</p>
                    </div>
                `,
                question: "Which search is most useful for learning computer basics?",
                options: ["computer", "asdfgh", "basic computer parts for beginners"],
                answer: 2
            }
        ]
    },
    {
        id: "email",
        icon: "📧",
        title: "Email",
        description: "Learn about email addresses, message fields, and attachments.",
        lessons: [
            {
                title: "Understanding Email",
                content: `
                    <p><strong>Email</strong> means electronic mail. It lets people send messages over the internet, often in seconds.</p>
                    <h3>Why use email?</h3>
                    <ul>
                        <li>Apply for jobs, courses, and scholarships.</li>
                        <li>Contact teachers, offices, and companies.</li>
                        <li>Create accounts on many websites and apps.</li>
                        <li>Send photos and documents to family and friends.</li>
                    </ul>
                    <h3>Parts of an email</h3>
                    <ul>
                        <li><strong>To:</strong> The main recipient's address.</li>
                        <li><strong>CC:</strong> Sends a visible copy to another person.</li>
                        <li><strong>BCC:</strong> Sends a copy without showing that recipient's address to other recipients.</li>
                        <li><strong>Subject:</strong> A short title describing the message.</li>
                        <li><strong>Message body:</strong> The main text.</li>
                        <li><strong>Send:</strong> Sends the message.</li>
                    </ul>
                    <h3>Understanding an email address</h3>
                    <p>An email address often looks like <em>student@example.com</em>.</p>
                    <ul>
                        <li><strong>student</strong> is the user name.</li>
                        <li><strong>@</strong> means "at".</li>
                        <li><strong>example.com</strong> is the email service (domain).</li>
                    </ul>
                    <h3>Your mailbox</h3>
                    <ul>
                        <li><strong>Inbox:</strong> Messages you receive.</li>
                        <li><strong>Sent:</strong> Messages you sent.</li>
                        <li><strong>Drafts:</strong> Messages you started but did not send.</li>
                        <li><strong>Spam:</strong> Unwanted or suspicious messages.</li>
                        <li><strong>Trash:</strong> Deleted messages.</li>
                    </ul>
                    <h3>Write a clear email</h3>
                    <p>Start with a polite greeting, explain why you are writing, include important details, and finish with your name.</p>
                    <p>Before sending, check the recipient, subject, spelling, and tone.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Always write a clear subject.</li>
                            <li>Check the address before you press Send.</li>
                            <li>Be polite and clear.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>On paper, write a short email to a teacher asking for help with homework. Include a greeting, a subject, a clear message, and your name.</p>
                    </div>
                `,
                question: "Which email field contains a short title for the message?",
                options: ["Subject", "To", "Attachment"],
                answer: 0
            },
            {
                title: "Sending and Receiving Attachments",
                content: `
                    <p>An <strong>attachment</strong> is a file sent with an email, such as a document, photo, or PDF.</p>
                    <h3>Send an attachment</h3>
                    <ol>
                        <li>Start a new email and enter the recipient and subject.</li>
                        <li>Write a short message.</li>
                        <li>Select the paperclip or Attach file option.</li>
                        <li>Choose the correct file.</li>
                        <li>Wait until the file finishes uploading.</li>
                        <li>Check the filename and recipient before sending.</li>
                    </ol>
                    <p>Email services may limit attachment sizes. For large files, use a trusted file-sharing service and check sharing permissions.</p>
                    <h3>Receive and save an attachment</h3>
                    <ol>
                        <li>Open the email.</li>
                        <li>Click the attachment name to preview it, or choose Download.</li>
                        <li>Find the file in your Downloads folder.</li>
                        <li>Move it to a clear folder so you can find it later.</li>
                    </ol>
                    <h3>Reply and forward</h3>
                    <ul>
                        <li><strong>Reply:</strong> Answers only the sender.</li>
                        <li><strong>Reply all:</strong> Answers the sender and everyone else on the email. Use it carefully.</li>
                        <li><strong>Forward:</strong> Sends the email to someone new.</li>
                    </ul>
                    <h3>Stay safe</h3>
                    <p>Do not open unexpected attachments just because they came by email. Confirm unusual messages with the sender through a separate trusted method.</p>
                    <p>Never share your password or one-time verification code in response to an email.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Attach the right file and check the recipient.</li>
                            <li>Do not open attachments you do not expect.</li>
                            <li>Never send your password by email.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>With a family member or friend, send each other an email with a small photo attached. Download the photo you receive and save it in your <em>Photos</em> folder.</p>
                    </div>
                `,
                question: "What should you check before sending an email attachment?",
                options: [
                    "That the correct file is attached and the recipient is right",
                    "That the subject is always empty",
                    "That you have shared your password"
                ],
                answer: 0
            }
        ]
    },
    {
        id: "safety",
        icon: "🔒",
        title: "Online Safety",
        description: "Protect your accounts and personal information online.",
        lessons: [
            {
                title: "Passwords and Personal Information",
                content: `
                    <p>Online safety means protecting your devices, accounts, and personal information.</p>
                    <h3>Create safer passwords</h3>
                    <ul>
                        <li>Use a long password or passphrase that is hard to guess.</li>
                        <li>Use a different password for each important account.</li>
                        <li>Avoid easy-to-guess details such as your name or birthday.</li>
                        <li>Consider using a reputable password manager.</li>
                        <li>Turn on two-step verification when available.</li>
                    </ul>
                    <h3>Make a strong passphrase</h3>
                    <p>Join several random words and add numbers or symbols. A long mix is easier to remember and much harder to guess than a short word.</p>
                    <p><strong>Weak examples:</strong> <em>123456</em>, <em>password</em>, <em>myname2008</em></p>
                    <p><strong>Never share your password or OTP with another person.</strong></p>
                    <h3>Two-step verification</h3>
                    <p>Two-step verification asks for a second proof after your password, such as a code sent to your phone. Even if someone learns your password, they cannot easily enter your account.</p>
                    <h3>Protect personal information</h3>
                    <p>Think carefully before sharing your address, phone number, school details, identity documents, photos, or live location online.</p>
                    <ul>
                        <li>Check privacy settings on social media.</li>
                        <li>Do not accept friend requests from strangers.</li>
                        <li>Do not post photos that show your home, school, or daily routine.</li>
                    </ul>
                    <p>On a shared computer or a cyber cafe, sign out of your accounts when you finish and do not save passwords in the browser.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Long and unique passwords are safer.</li>
                            <li>Never share passwords or OTPs.</li>
                            <li>Always sign out on shared computers.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Think of a passphrase made of four random words that mean something only to you. Do not write down or share your real passwords. Practice remembering your phrase.</p>
                    </div>
                `,
                question: "Which habit helps protect your online accounts?",
                options: [
                    "Using the same simple password everywhere",
                    "Using unique strong passwords and two-step verification",
                    "Sharing OTPs with callers"
                ],
                answer: 1
            },
            {
                title: "Recognizing Scams and Suspicious Links",
                content: `
                    <p>Online scams try to trick people into sending money, revealing information, or installing unsafe software.</p>
                    <h3>Common types of scams</h3>
                    <ul>
                        <li><strong>Phishing:</strong> A fake email or message that pretends to be a bank, company, or office to steal your details.</li>
                        <li><strong>Prize or lottery scams:</strong> You are told you won something, but must pay or share details first.</li>
                        <li><strong>Fake job offers:</strong> You are asked to pay a fee to get a job.</li>
                        <li><strong>Fake calls:</strong> Someone pretends to be from your bank and asks for your OTP or PIN.</li>
                    </ul>
                    <h3>Warning signs</h3>
                    <ul>
                        <li>A message demands immediate action.</li>
                        <li>You are promised unexpected money or a prize.</li>
                        <li>Someone asks for your password, OTP, bank PIN, or card details.</li>
                        <li>A link or sender address looks unusual.</li>
                        <li>The message has many spelling mistakes.</li>
                        <li>A stranger asks you to install an app or give remote access.</li>
                    </ul>
                    <h3>What should you do?</h3>
                    <ol>
                        <li>Do not click suspicious links in a hurry.</li>
                        <li>Check the sender and website address carefully.</li>
                        <li>Contact the organization through its official website or known phone number.</li>
                        <li>Never send money or share verification codes with suspicious contacts.</li>
                        <li>Report and delete scam messages.</li>
                        <li>Tell a trusted adult, teacher, or family member.</li>
                    </ol>
                    <h3>If you think you were tricked</h3>
                    <ul>
                        <li>Change your passwords right away.</li>
                        <li>Contact your bank if money or card details were involved.</li>
                        <li>Report the scam to the platform or the local cyber crime authority.</li>
                    </ul>
                    <p>HTTPS means the connection is encrypted, but it does not guarantee that the website is trustworthy.</p>
                    <div class="remember-box">
                        <strong>💡 Remember</strong>
                        <ul>
                            <li>Stop. Think. Check before you click.</li>
                            <li>Real banks never ask for your OTP or PIN.</li>
                            <li>If it sounds too good to be true, it is probably a scam.</li>
                        </ul>
                    </div>
                    <div class="try-box">
                        <strong>🖱️ Try It Yourself</strong>
                        <p>Talk with your family about scam calls or messages. Together, decide what each person will do if someone asks for an OTP.</p>
                    </div>
                `,
                question: "A stranger says you have won a prize and asks for your OTP. What should you do?",
                options: [
                    "Send the OTP quickly",
                    "Post the OTP online",
                    "Keep the OTP private and verify the message independently"
                ],
                answer: 2
            }
        ]
    }
];

// ------------------------------------------------------------
// Styles for the lesson pop-up, the lesson boxes, and the
// reset button. They are added by JavaScript, so style.css
// does not need to change.
// ------------------------------------------------------------
function addLessonStyles() {
    if (document.getElementById("lessonStyles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "lessonStyles";

    style.textContent = `
        .lesson-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(20, 59, 42, 0.62);
            align-items: center;
            justify-content: center;
            padding: 15px;
            z-index: 1000;
        }

        .lesson-box {
            position: relative;
            background: white;
            width: 100%;
            max-width: 700px;
            max-height: 90vh;
            overflow-y: auto;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .close-button {
            position: absolute;
            top: 12px;
            right: 15px;
            background: #e7f3eb;
            color: #28784b;
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            font-size: 22px;
            cursor: pointer;
        }

        .lesson-count {
            color: #6d7b72;
            font-size: 13px;
            margin-bottom: 8px;
            padding-right: 40px;
        }

        .lesson-box h2 {
            color: #28784b;
            margin-bottom: 15px;
            font-size: 24px;
        }

        .lesson-box h3 {
            margin: 18px 0 8px;
        }

        .lesson-content {
            line-height: 1.7;
            color: #34463a;
        }

        .lesson-content p {
            margin-bottom: 12px;
        }

        .lesson-content ul,
        .lesson-content ol {
            margin: 0 0 12px 22px;
        }

        .lesson-content li {
            margin-bottom: 6px;
        }

        .remember-box {
            background: #e8f4ec;
            border-left: 5px solid #28784b;
            border-radius: 10px;
            padding: 14px 16px;
            margin: 18px 0;
        }

        .remember-box ul {
            margin: 8px 0 0 20px;
        }

        .try-box {
            background: #f1f7f2;
            border-left: 5px solid #7ba88a;
            border-radius: 10px;
            padding: 14px 16px;
            margin: 18px 0;
        }

        .try-box p {
            margin: 8px 0 0 0;
        }

        .lesson-box hr {
            margin: 22px 0;
            border: none;
            border-top: 1px solid #e1e9e3;
        }

        #quizOptions {
            margin: 15px 0;
        }

        .quiz-option {
            display: block;
            width: 100%;
            text-align: left;
            background: white;
            border: 2px solid #dddddd;
            border-radius: 10px;
            padding: 12px 15px;
            margin-bottom: 10px;
            font-size: 15px;
            color: #183f2d;
            cursor: pointer;
        }

        .quiz-option:disabled {
            cursor: default;
        }

        #quizFeedback {
            font-weight: bold;
            min-height: 24px;
            margin-bottom: 12px;
        }

        button.main-button {
            border: none;
            cursor: pointer;
            font-size: 15px;
        }

        button.main-button:disabled {
            background: #a8cbb3;
            cursor: not-allowed;
        }

        .reset-area {
            margin-top: 20px;
            text-align: right;
        }

        .reset-button {
            background: white;
            color: #d93025;
            border: 2px solid #d93025;
            border-radius: 8px;
            padding: 10px 18px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
        }

        .reset-button:hover {
            background: #d93025;
            color: white;
        }
    `;

    document.head.appendChild(style);
}

// Load saved progress safely.
let progress;

try {
    progress = JSON.parse(
        localStorage.getItem("ruralTechProgress") ||
        '{"completed":[],"points":0}'
    );

    if (
        !progress ||
        !Array.isArray(progress.completed) ||
        typeof progress.points !== "number"
    ) {
        progress = { completed: [], points: 0 };
    }
} catch (error) {
    progress = { completed: [], points: 0 };
}

let currentSkill = null;
let currentLessonIndex = 0;
let selectedAnswer = null;

function saveProgress() {
    try {
        localStorage.setItem("ruralTechProgress", JSON.stringify(progress));
    } catch (error) {
        console.error("Could not save progress:", error);
    }

    updateDashboard();
}

function isCompleted(skill, index) {
    return progress.completed.includes(`${skill.id}-${index}`);
}

function updateDashboard() {
    const totalLessons = skills.reduce(
        (total, skill) => total + skill.lessons.length,
        0
    );

    const validCompleted = progress.completed.filter(key =>
        skills.some(skill =>
            skill.lessons.some((_, index) => key === `${skill.id}-${index}`)
        )
    );

    const completedCount = validCompleted.length;
    const percentage = totalLessons
        ? Math.round((completedCount / totalLessons) * 100)
        : 0;

    const overallPercent = document.getElementById("overallPercent");
    const overallBar = document.getElementById("overallBar");
    const lessonsDone = document.getElementById("lessonsDone");
    const points = document.getElementById("points");
    const lessonSummary = document.getElementById("lessonSummary");

    if (overallPercent) {
        overallPercent.textContent = `${percentage}%`;
    }

    if (overallBar) {
        overallBar.style.width = `${percentage}%`;
    }

    if (lessonsDone) {
        lessonsDone.textContent = completedCount;
    }

    if (points) {
        points.textContent = progress.points;
    }

    if (lessonSummary) {
        lessonSummary.textContent =
            `${completedCount} of ${totalLessons} lessons completed`;
    }

    renderAchievements();
}

function renderSkills() {
    const grid = document.getElementById("skillsGrid");

    if (!grid) {
        console.error('Element with id "skillsGrid" was not found.');
        return;
    }

    grid.innerHTML = skills.map(skill => {
        const completed = skill.lessons.filter(
            (_, index) => isCompleted(skill, index)
        ).length;

        const percentage = Math.round(
            (completed / skill.lessons.length) * 100
        );

        return `
            <article class="skill-card">
                <div class="skill-icon">${skill.icon}</div>
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>

                <button class="learn-button"
                    onclick="startSkill('${skill.id}')">
                    ${completed === skill.lessons.length
                        ? "Review Lessons"
                        : "Learn Now"} →
                </button>

                <div class="progress-bar" style="margin-top:15px">
                    <div style="
                        width:${percentage}%;
                        height:100%;
                        background:#28784b;
                        transition:width .3s">
                    </div>
                </div>

                <small>
                    ${completed}/${skill.lessons.length}
                    lessons completed (${percentage}%)
                </small>
            </article>
        `;
    }).join("");
}

function startSkill(skillId) {
    currentSkill = skills.find(skill => skill.id === skillId);

    if (!currentSkill) {
        return;
    }

    currentLessonIndex = currentSkill.lessons.findIndex(
        (_, index) => !isCompleted(currentSkill, index)
    );

    if (currentLessonIndex === -1) {
        currentLessonIndex = 0;
    }

    showLesson();
}

function showLesson() {
    if (!currentSkill) {
        return;
    }

    const lesson = currentSkill.lessons[currentLessonIndex];

    if (!lesson) {
        return;
    }

    selectedAnswer = null;

    let modal = document.getElementById("lessonModal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "lessonModal";
        modal.className = "lesson-modal";

        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeLesson();
            }
        });

        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="lesson-box">
            <button class="close-button"
                onclick="closeLesson()"
                aria-label="Close lesson">×</button>

            <p class="lesson-count">
                ${currentSkill.title} · Lesson
                ${currentLessonIndex + 1} of ${currentSkill.lessons.length}
            </p>

            <h2>${currentSkill.icon} ${lesson.title}</h2>

            <div class="lesson-content">
                ${lesson.content}
            </div>

            <hr>

            <h3>Quick Quiz</h3>
            <p>${lesson.question}</p>

            <div id="quizOptions">
                ${lesson.options.map((option, index) => `
                    <button class="quiz-option"
                        aria-pressed="false"
                        onclick="selectOption(${index})">
                        ${option}
                    </button>
                `).join("")}
            </div>

            <p id="quizFeedback" aria-live="polite"></p>

            <button class="main-button"
                id="checkAnswerButton"
                onclick="checkAnswer()">
                Check Answer
            </button>

            <button id="nextLessonButton"
                class="main-button"
                style="display:none;margin-left:8px"
                onclick="goToNextLesson()">
                Next Lesson →
            </button>
        </div>
    `;

    modal.style.display = "flex";

    // Stop the page behind the pop-up from scrolling.
    document.body.style.overflow = "hidden";

    // Start each lesson at the top.
    const box = modal.querySelector(".lesson-box");

    if (box) {
        box.scrollTop = 0;
    }
}

function selectOption(index) {
    selectedAnswer = index;

    document.querySelectorAll(".quiz-option").forEach((button, i) => {
        const selected = i === index;

        button.style.background = selected ? "#e3f1e7" : "white";
        button.style.borderColor = selected ? "#28784b" : "#dddddd";

        button.setAttribute(
            "aria-pressed",
            selected ? "true" : "false"
        );
    });

    const feedback = document.getElementById("quizFeedback");

    if (feedback) {
        feedback.textContent = "";
    }
}

function checkAnswer() {
    if (!currentSkill) {
        return;
    }

    const lesson = currentSkill.lessons[currentLessonIndex];
    const feedback = document.getElementById("quizFeedback");

    if (!feedback) {
        return;
    }

    if (selectedAnswer === null) {
        feedback.textContent = "Please select an answer first.";
        feedback.style.color = "red";
        return;
    }

    if (selectedAnswer === lesson.answer) {
        const key = `${currentSkill.id}-${currentLessonIndex}`;
        const firstTime = !progress.completed.includes(key);

        if (firstTime) {
            progress.completed.push(key);
            progress.points += 10;

            saveProgress();
            renderSkills();

            feedback.textContent = "Correct! Great job! +10 points";
        } else {
            feedback.textContent = "Correct! Great job!";
        }

        feedback.style.color = "green";

        const checkButton = document.getElementById("checkAnswerButton");
        const nextButton = document.getElementById("nextLessonButton");

        if (checkButton) {
            checkButton.disabled = true;
        }

        document.querySelectorAll(".quiz-option").forEach(button => {
            button.disabled = true;
        });

        if (nextButton) {
            nextButton.style.display = "inline-block";
        }
    } else {
        feedback.textContent = "Not quite. Read the lesson and try again.";
        feedback.style.color = "red";
    }
}

function goToNextLesson() {
    if (!currentSkill) {
        return;
    }

    if (currentLessonIndex < currentSkill.lessons.length - 1) {
        currentLessonIndex++;
        showLesson();
    } else {
        closeLesson();
        alert("Great work! You've finished this topic's lessons.");
    }
}

function closeLesson() {
    const modal = document.getElementById("lessonModal");

    if (modal) {
        modal.style.display = "none";
    }

    document.body.style.overflow = "";
}

function renderAchievements() {
    const badgeGrid = document.getElementById("badgeGrid");

    if (!badgeGrid) {
        return;
    }

    const completedCount = progress.completed.length;

    const achievements = [
        {
            title: "🌱 First Step",
            description: "Complete your first lesson",
            unlocked: completedCount >= 1
        },
        {
            title: "⭐ Quick Learner",
            description: "Earn 20 points",
            unlocked: progress.points >= 20
        },
        {
            title: "🏆 Skill Builder",
            description: "Complete all lessons in a topic",
            unlocked: skills.some(skill =>
                skill.lessons.every((_, index) => isCompleted(skill, index))
            )
        }
    ];

    badgeGrid.innerHTML = achievements.map(badge => `
        <div class="badge-card ${badge.unlocked ? "" : "locked"}">
            <h3>${badge.title} ${badge.unlocked ? "✓" : "🔒"}</h3>
            <p>${badge.description}</p>
        </div>
    `).join("");
}

// ------------------------------------------------------------
// NEW: Reset progress
// ------------------------------------------------------------
function resetProgress() {
    const sure = confirm(
        "Are you sure you want to reset all your progress?\n\n" +
        "Your points, completed lessons, and badges will be erased."
    );

    if (!sure) {
        return;
    }

    progress = { completed: [], points: 0 };

    try {
        localStorage.removeItem("ruralTechProgress");
    } catch (error) {
        console.error("Could not clear saved progress:", error);
    }

    currentSkill = null;
    currentLessonIndex = 0;
    selectedAnswer = null;

    closeLesson();
    renderSkills();
    updateDashboard();

    alert("Your progress has been reset. You can start again!");
}

// NEW: Adds the Reset button under the My Progress cards.
function addResetButton() {
    const progressSection = document.getElementById("progress");

    if (!progressSection || document.getElementById("resetButton")) {
        return;
    }

    const area = document.createElement("div");
    area.className = "reset-area";

    const button = document.createElement("button");
    button.id = "resetButton";
    button.className = "reset-button";
    button.type = "button";
    button.textContent = "🔄 Reset Progress";
    button.addEventListener("click", resetProgress);

    area.appendChild(button);
    progressSection.appendChild(area);
}

// Press Escape to close the lesson.
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeLesson();
    }
});

// Start the RuralTech website.
addLessonStyles();
addResetButton();
renderSkills();
updateDashboard();

// Make functions accessible to the learning buttons.
window.startSkill = startSkill;
window.selectOption = selectOption;
window.checkAnswer = checkAnswer;
window.goToNextLesson = goToNextLesson;
window.closeLesson = closeLesson;
window.resetProgress = resetProgress;