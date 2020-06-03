# Erina

A discord bot waifu that add role on reaction and give you many little command

## Commands

List of commands:

- !prune <number> : remove the last any messages as the number you want
- !help : display all the commands available.
- !help <command> : display all the infos of a command
- !reload <command> : reload a command
- !server : display some server info
- !userInfo : display user info
- !avatar : display the link of yout avatar
- !avatar <user> : display the link of the user
- !my-permission : display all of the permissions you have on the server

## How to

List of how to :

### Commands

This is how a command is written

- name: String
- description: String
- permission?: Boolean
- usage?: String
- args?: true
- aliases?: Array<string>
- cooldown?: Integer
- execute(message, args){}

Explanation

Name is the name of your command : help, kick, my-permission, ...

Description is the description for the help

Permission (optional) is a boolean. If set to true, you must have permission to kick, ban, manage message to run this command

Usage (optional) is a description of how to use the command

Args (optional) is a boolean. If set to true, the command must have an arg to run : kick

Aliases is an array of strings. It's a list of alias for your command : avatar

Cooldown is a number (in sec) for preventing spam. It set to 3 secondes by default

Execute is where the magic happen ...
