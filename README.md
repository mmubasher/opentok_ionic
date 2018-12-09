# Opentok Ionic

This project implements [opentok/cordova-plugin-opentok](https://github.com/opentok/cordova-plugin-opentok) in Ionic 4 and is meant as a boiler plate as well as to highlight issues faced during implementation.

## Getting Started

Following instructions will get you a copy of the project up and running on your local machine

### Prerequisites

<em>(You may skip prerequisites if you have a latest Cordova environment running)</em>

Download and install NodeJS from: http://nodejs.org. Verify installation using following command
```
$ node --version
```

Install Cordova
```
$ npm install -g ionic cordova
```

<h3>Install Java</h3>
The Android SDK needs the Java Development Kit (JDK) to be installed, version 1.7 or later. Note that the Java Runtime Environment (JRE) is not sufficient, you will need the JDK. To check if you have the JDK installed already, type this on the command line:

javac -version
If you do not have the JDK installed, proceed as follows:

<p>The Android SDK needs the Java Development Kit (JDK) to be installed, version 1.7 or later. Note that the Java Runtime Environment (JRE) is not sufficient, you will need the JDK. To check if you have the JDK installed already, type this on the command line:</p>
<pre>javac -version</pre>
<p>If you do not have the JDK installed, proceed as follows:</p>
<ol>
    <li>
        <p>Download the recent version of Java SE JDK (SE = Standard Edition) from Oracle:&nbsp;<a href="http://www.oracle.com/technetwork/java/javase/downloads/" target="_blank">www.oracle.com/technetwork/java/javase/downloads/</a>. Click the Java SE Download to see the list of downloads. Get the "Windows x86" download if you have 32-bit Windows, and "Windows x64" if you have 64-bit Windows. If you do not know which version you have, find out using the Control Panel by selecting "System and Security" and then "System", where you will find the "System type" saying if your Windows version is 32-bit or 64-bit.</p>
    </li>
    <li>
        <p>Go along and run the downloaded installer file. Using the default selections should be fine, but take a note of the directory in which you install the JDK. You will need to add this to the PATH in a later step below.</p>
    </li>
    <li>
        <p>Next, update your path to include the JDK. Open the&nbsp;<strong>Control Panel</strong>, click&nbsp;<strong>System and Security</strong>, click&nbsp;<strong>System</strong>, click&nbsp;<strong>Change settings</strong>, which will open the System Properties window. Select the&nbsp;<strong>Advanced&nbsp;</strong>tab, then click the&nbsp;<strong>Environment Variables</strong>&nbsp;button.</p>
    </li>
    <li>
        <p>In the list&nbsp;<strong>User variables</strong>&nbsp;select&nbsp;<strong>PATH</strong>&nbsp;and click the&nbsp;<strong>Edit</strong>&nbsp;button. (If there is no PATH entry in the list, click the New button to create one.)</p>
    </li>
    <li>
        <p>At the end of the field&nbsp;<strong>Variable value</strong>, add a semicolon followed by the path to the bin directory of the JDK install. Here is an example (note that this must be the actual path used for the install on your machine):</p>
        <pre>;C:\Program Files\Java\jdk1.8.0_11\bin</pre> An easy way to do this is to prepare the path to add in a text editor, then paste it at the end of the input field. When done click the&nbsp;<strong>OK</strong>&nbsp;button.
        <p>&nbsp;</p>
    </li>
    <li>
        <p>Next add the&nbsp;<strong>JAVA_HOME</strong>&nbsp;variable if it is not present (and if it is in the list, you may need to update its value using the Edit button). Click the&nbsp;<strong>New</strong>&nbsp;button. In the field&nbsp;<strong>Variable name</strong>&nbsp;type:</p>
        <pre>JAVA_HOME</pre> In the field&nbsp;<strong>Variable value</strong>&nbsp;enter the path to the directory where the JDK is installed, without the semicolon and the /bin subdirectory, for example:
        <pre>C:\Program Files\Java\jdk1.8.0_11</pre> Click the&nbsp;<strong>OK</strong>&nbsp;button.
        <p>&nbsp;</p>
    </li>
    <li>
        <p>Click the&nbsp;<strong>OK</strong>&nbsp;button again to close the Environment Variables window.</p>
    </li>
    <li>
        <p>Now you are ready to test the install. Close any open command windows, and open a new command window and type:</p>
        <pre>javac -version</pre> If you see a version number you are done with the JDK install!</li>
</ol>

<h3>Install Android SDK Tools</h3>

<p>To install the tools needed to build Android app using Cordova you need the Android SDK Tools. The easiesy way to install these tools is to install Android Studio. Optionally you can install the command line tools only. Follow these steps to install Android Studio:</p>
<ol>
	<li>
		<p>Go to the <a href="https://developer.android.com/studio/index.html" target="_blank">Android Studio download page</a> and download and install Android Studio for your platform. (If you would wish to go for only the SDK Tools, you can find latest download links to the command line tools at the end of the Android Studio download page or you may download from following.)</p>
    <table>
	<thead>
		<tr>
			<th>Platform</th>
			<th>SDK tools</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Windows</td>
			<td><a href="https://dl.google.com/android/repository/sdk-tools-windows-4333796.zip">sdk-tools-windows-4333796.zip</a></td>
		</tr>
		<tr>
			<td>Mac</td>
			<td><a href="https://dl.google.com/android/repository/sdk-tools-darwin-4333796.zip">sdk-tools-darwin-4333796.zip</a></td>
		</tr>
		<tr>
			<td>Linux</td>
			<td><a href="https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip">sdk-tools-linux-4333796.zip</a></td>
		</tr>
	</tbody>
</table>
	</li>
	<li>
		<p>Find the path of the Android SDK tools by consulting the <a href="https://developer.android.com/studio/command-line/sdkmanager.html" target="_blank">sdkmanager documentation page</a>. Check in your system that the files are actually there.</p>
	</li>
	<li>
		<p>Add the path of the SDK Tools (directories <strong>tools</strong> and <strong>platform-tools</strong> to the system PATH variable. Open the <strong>Control Panel</strong>, click <strong>System and Security</strong>, click <strong>System</strong>, click <strong>Change settings</strong>, click the <strong>Advanced</strong>tab, then click the <strong>Environment Variables</strong> button.</p>
	</li>
	<li>
		<p>In the list <strong>User variables</strong> select <strong>PATH</strong> and click the <strong>Edit</strong> button.</p>
	</li>
	<li>
		<p>At the end of the field <strong>Variable value</strong>, add a semicolon followed by the path to the <strong>tools</strong> and <strong>platform-tools</strong> directores of the Android SDK install. Here is an example of what to add (note that there are two paths in one line, separated by a semicolon):</p>
		<p><code>;C:\Users\mobby\AppData\Local\Android\android-sdk\tools;C:\Users\mobby\AppData\Local\Android\android-sdk\platform-tools</code></p>
		You can prepare the path in a text editor, copy it and paste at the end of the input field. Click the <strong>OK</strong>button when done.
		<p>Please note that the exact path may differ in the latest download of the Android Studio/SDK. Consult the Android <a href="https://developer.android.com/studio/command-line/sdkmanager.html" target="_blank">documentation page for the sdkmanager</a> for further information.</p>
	</li>
	<li>
		<p>Next add the <strong>ANDROID_HOME</strong> environment variable in system settings in the same way that the JAVA_HOME variable was added above when installing Java. Set ANDROID_HOME to point to the root of the Android SDK folder, for example:</p>
		<pre>C:\Users\mobby\AppData\Local\Android\android-sdk</pre>
	</li>
	<li>
		<p>Click the <strong>OK</strong> button again to close the Environment Variables window.</p>
	</li>
	<li>
		<p>Now test the install. Close any open command windows, open a new command window and type:</p>
		<pre>adb version</pre>
		This should display the version of the Android Debug Bridge.</li>
	<li>
		<p>As the final step, you may need to get the specific Android SDK version used by Cordova. This can be done using the sdkmanager command or by using the tools in Android Studio.</p>
	</li>
</ol>

