---
title: How to Shell?
date: 2025-01-03 11:58:47 +05:30
# modified: 2020-02-02 16:49:47 +07:00
tags: [shell, bash, terminal, cli, unix/linux]
description: Essential Linux terminal commands. This blog and guide covers navigation, file management, redirection, superuser privileges, and bash scripting.
image: "/how-to-shell/shell_hello.png"
---

I have been using Linux for a few years now and while I am comfortable with the command line, I still find myself always going over to the StackOverflow for help and lately ChatGPT. Now, this has been working fine but I always felt that people who can navigate through the terminal like a pro are the [Shai-Huluds](https://dune.fandom.com/wiki/Shai-Hulud) of the software engineering community—greatly revered! And if I am being honest, I am envious of them.

So, I decided to change my dependence on StackOverflow and LLMs and learn the working of shell and Bash (_Bourne-Again SHell_) scripting and become the Shai-Hulud of my own terminal at least. And I found this series of lectures from MIT called the [Missing Semester of Your CS Education](https://missing.csail.mit.edu/). This blog post contains my learning from the lectures.

Disclaimer: My posts are non-exhaustive so I will keep updating them.

<figure>
<img src="https://i.ibb.co/3hxvnPQ/shell-hello.png" alt="hello from the terminal">
</figure>

### Basic Commands

These are some of the basic commands that can be combined with other commands to automate tasks.

**date**: Displays the current date and time.

```bash
$  date
```

**echo**: Prints the provided argument to the terminal.

```bash
$  echo  Hello
```

> To print multiple strings, use quotes: "Hello World" or escape characters: Hello\ World.

### Environment Variables and PATH

Environment variables are variables which store configurations and can be modified. When you type in a command in your terminal, your shell knows where to look for those command/programs on your computer and it knows it by going through a list of paths/directories stored in the `PATH` variable which is one of the environment variables. The `PATH` variable can be modified to add more paths. And the stored paths can be checked using:

```bash
$  echo $PATH # Prints all the path stored
```

To find the exact location of a command:

```bash
$  which echo 
```

### File System Structure

Linux and macOS systems have a single root (`/`), with directories branching from it, e.g., `/bin`,  `/mnt`,  `/opt` etc.

Windows, on the other hand, uses multiple roots, e.g., `C:\`, `D:\` etc. and then further directories branch from each of them.

### Paths: Absolute and Relative

**Absolute Path**: Complete path to a file or directory, starting from the root.
**Relative Path**: Path relative to the current directory.

Commands to navigate paths:

 **pwd**: Prints the current working directory.

```bash
$ pwd
```

 **cd**: Changes directories.
 
```bash
$ cd /Directory # Changes the location to Directory
$ cd .. # Changes the location to the parent directory
$ cd ~  # Changes the location to the home directory
$ cd - # Switches between the current and previous directory
```
### Listing Files and Directories

**ls**: Lists files in the current directory.

```bash
$ ls
$ ls -l # Detailed view
```
### Managing Files and Directories

**mv**: Renames or moves files and directories.

```bash
$ mv old.txt new.txt 
```

**cp**: Copies files and directories.

```bash
$ cp file.txt copy.txt # Creates a copy of file.txt
```

**rm**: Deletes files.

```bash
$ rm file.txt
$ rm -r directory # Deletes directories recursively
```

**rmdir**: Removes empty directories.

```bash
$ rmdir empty_directory
```

**mkdir**: Creates directories.

```bash
$ mkdir new_directory
```
### Knowing More About the Commands

Most commands accept flags like `--help` to display usage instructions:

```bash
$  ls  --help
```

There is also a built-in command `man` which takes another command as an argument and displays its manual:

```bash
$  man  ls
```

### Input/Output Rewiring

By default, the input and output stream in a shell is wired to the terminal screen but they can be rewired:

-  **>**: Rewires the output to a file (overwrites).
-  **>>**: Appends output to a file.
-  **<**: Rewires the input from a file.

Examples:

```bash
$  echo  "Hello"  >  file.txt # Rewires the output of echo from the terminal to file.txt
$  cat  <  file.txt  >  file_copy.txt # Rewires the content of file.txt as 
```

Piping is a process that takes the output of the program in left and gives it as the input to the program in the right.

Example:

```bash
$  ls  -l  |  grep  .txt # Ouput of ls -l is given as the input to grep 
```

> `grep` is a program that searches for strings matching a regular expression given as the argument, I will talk more about them later.

### Viewing and Manipulating File Content

**cat**: Prints file content.

```bash
$ cat file.txt
```

**tail**: Displays the last lines of a file.

```bash
$ tail -n2 file.txt # Prints last 2 lines of file.txt
```

### Working with Superuser Privilege

Root User: It is the administrator on the system and has user id = 0, it can practically do anything that it wants on the system, and it's also called the superuser. 

**sudo**: (_Do as the SuperUser_) Temporarily runs a command with root privileges.

```bash
$ sudo command # Runs the command as an administrator
```

**sudo su**: Switches the entire shell to root mode.

```bash
$ sudo su
```

> It is not a good idea to use your computer as a superuser or a root user all the time because one wrong command can mess up with your computer but there are times when a program required you to be a root user to run it.

### Exploring the `/sys` Directory

There is a special directory called `/sys` which has a bunch of special programs or knobs of sorts which lets you play with the configuration of the system and it requires a superuser permission. It's a whole different magical world inside the `/sys` directory but do proper research before messing with anything inside it because it directly effects your system's kernel. 

<figure>
<img src="/how-to-shell/shell_sys.png" alt="the configurables inside the sys directory">
</figure>

For example, if your computer has backlight, you can play with it and change the brightness from your terminal:

```bash
$  echo  19000  >  /sys/class/backlight/intel_backlight/brightness # Turns the brightness value to 19000 if it's possible in your system
```

You can configure a whole lot of stuff, even the LEDs present on your computer. You can write a program to configure an LED on your computer to light up if you get an email or something like that but I hope you do proper research before changing the configurations.

### Miscellaneous Commands

**xdg-open**: Opens a file with its default application.

```bash
$ xdg-open index.html # Opens the HTML file with the default application, works on Linux
```

**Ctrl+L**: Clears the terminal.

These commands are almost enough now to operate everything on your computer just using your terminal. I will update on the Bash scripting soon :)