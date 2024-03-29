---
title: NCSC 3.0 CTF
short: NCSC 3.0 CTF
createdAt: 2022-02-01T05:23:15.493Z
date: 2022-02-01
cover-image-large: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643692913/large_NCSC_CTF_8d1c5e270f.jpg"
cover-image-small: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643692914/small_NCSC_CTF_8d1c5e270f.jpg"
tags: [Cybersecurtiy, Writeups, Event, CTF]
---

# NCSC 3.0 CTF

The National Cyber Security Congress is a national wide event where all cybersecurity enthusiasts and professionals meet to share knowledge and participate in many challenges and workshops . The NCSC in its third edition took place the 28,29,30 of January 2022 and i was lucky to participate in its CTF event !

## Broken Pingyy

![Broken Pingy Task](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643681840/broken_pingy_2cb1f0ff6f.png)

First, only the website link was provided in the task description.

![Broken Pingy Website](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643682664/Broken_Pingy_Website_80f7e7330a.png)

I tried XSS and SQL injection but i didn't get anything. After some time a hint came which is the source code of the challenge. All i had to do is to open it .

![Broken Pingy Code](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643682428/broken_pingy_code_ec40393494.png)

As we can see by tracking the `$clean` command i was able to find the vulnerability.

> The `escapeshellarg()` is a PHP function that adds single quotes around a string and quotes/escapes any existing single quotes allowing you to pass a string directly to a shell function and having it be treated as a single safe argument.

![Broken Pingy Vuln](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643682428/broken_pingyy_vuln_091139a167.png)

Let's try to add some spice to the IP address ( Do not forget you have to close the bash -c argument single quote xD by either adding a command at the end because the payload will become 'payload' so we will have `''bash -c 'ping -c1 -w3 *'payload'* "` so we need two shell commands inside payload .

```bash

' & cd / & cat flag

```

![Broken Pingy Solved](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643683138/large_Broken_Pingy_Solved_e5543f33da.png)

## Welcome to Web Universe

![Welcome To Web Universe Task](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688099/Welcome_To_Web_Universe_efe3c43546.png)

![Welcome To Web Universe Website](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688101/Welcome_To_Web_Universe_Solved_6623a7ca60.png)

As you can see the Website seems very empty nothing but a text and weird URL `/leetstatus` . I checked the HTML code of the page to see if there is any hidden comments.

![Welcome To Web Universe Code](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688104/large_Welcome_To_Web_Universe_Website_3f2b067d82.png)
Nothing :')

I opened the source code . It's a _flask_ application and the _nginx_ server configuration was included.

![Welcome To Web Universe Source Code](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688102/large_Welcome_To_Web_Universe_Code_7fda5f2b6d.png)

- What got my attention is this weird combination of both routes . How in the flask application we get the status page from

> <http://api:5000/v1/status> and we have clearly did <http://20.119.58.135:4567/leetstatus> .
> In the _nginx_ configuration the requests were proxied but how it did really work. How could we get the _leetstatus_ route ?

A quick read of _NGINX_ docs was really needed

![Nginx Docs](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688103/medium_Welcome_To_Web_Universe_Docs_2348aba4e4.png)

**Oh so it replaces the part of the URI that matches the given location by the proxy_pass. To put it in other words**
**/leet -> /v1/** .

Now i understood how it works. Looking back to the Location it's vulnerable to LFI but it needs a little bit of thinking .
We want to get to <http://api:5000/flag> which is the same as <http://api:5000/v1/../flag> By transforming it by the reverse proxy configuration we get <http://20.119.58.135:4567/leet../flag>.

![Welcome To Web Universe Solved](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688103/medium_Welcome_To_Web_Universe_Solved_6623a7ca60.png)

## Peehpee

![Peehpee Task](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688093/Peehpee_ef3a2c0915.png)
This challenge was all about concentration .
![Peehpee](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688096/large_Peehpee_Solver_68c4bdde53.png)
As we can see two things were our main problem . The first that the first underscore query variable was filtered of all helpful characters and the second that the same query variable was the one executed .

![Regex](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688878/R_Egex_9e19b463dd.png)

Wait is it really sanitized ? The regex is clearly bad . It means any string that starts with dollar sign will be good to go and that's all we need to solve it .
So by making :

```python
_=$x
__=Kahla

# we will get at the evaluated expression

return $x =.$x.

# which will evaluate to Kahla so the if statement will become true and we will get the flag !
```

![Peehpee Solved](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688096/large_Peehpee_Solver_68c4bdde53.png)

## Race Condition

![Race Uploader Task](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643689099/Race_Uploader_Task_c8849b9247.png)

By opening the challenge we find the source code and the website . We quickly check the website. It's an upload page for only PNG,GIF, JPG formats. For the code it's simple . It uploads the files to _/uploads_ directory and verify their formats if they are bad they simply delete . That's all i needed to know.

![Race Uploader Website](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688097/large_Race_Uploader_74fe45b913.png)

![Race Uploader Code](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688098/Race_Uploader_Code_bd19de6d00.png)
Reflecting back, the challenge name was a really good clue . Race Uploader ? Race Conditions !

![Race Condition Explanation](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688094/Race_Condition_Word_452d9a7a5c.png)

![Race Uploader Code](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688099/Race_Uploader_Explaination_329b5b1125.png)

In our case, the problem will occur after the upload . Actually, the bad file will not be immediately deleted. A context switch might occur leaving the operation hanging till our thread goes running again . The problem is when that happens . The simple answer we don't know ! We have to keep sending both the request that holds the bad file and the get request to fetch the flag till they hook up .

- In the top right there is the file we will upload to the server !
- I wrote a small python script code below to continuously send get requests to the **URL/uploads/ourFileName.php**

```python

 #! /usr/bin/python
import requests
while True:
    reqs="http://20.119.58.135:567/uploads/phpServer.php"
    response = requests.get(reqs)
    if(response.status_code ==200):
        print(response.text)
        break
```

![Race Uploader Solver](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643688097/large_Race_Condition_Solved_dc6855e30a.png)
Pretty cool right ?

## Weird PHP

![Weird PHP](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643691371/Weird_Php_Task_d1e6c97667.png)

This challenge is straight forward . We got three variables that we need to pick values for so all the if statement will be evaluated as true.
The thing here is we have loose comparison and a quick google search might come very helpful .
First If statement : setting the key value to 0 will make it match the hidden string .

> <https://stackoverflow.com/questions/6843030/why-does-php-consider-0-to-be-equal-to-a-string>

---> **So we got `a={"key":0}`**

Second we want to make the md5(b) == md5(c). Should i think about md5 hash collisions ? No that is clearly a rabbit hole by making both b and c null we can pass the second if statement. So a quick search if the `md5()` returns a null statement

> [<u>Stack Overflow Comment was very helpful](https://stackoverflow.com/posts/66523194/timeline)</u>

OK, here's a hint.

PHP's [md5()](https://www.php.net/md5) function expects its argument to be a string.

Can you think of some way of forcing this statement to deal with a different data type?

Alright, let's make them arrays
---> **So we got `b[ ]=1 & c[ ]=1`**

Finally all we have to do is visit our URL `http://20.119.58.135:276/?a={"key":0}&b[]=1&c[]=1`**

![Weird Php Solved](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1643691373/large_Weird_Php_Solved_c352ba12ea.png)

## Final words

First of all, I really want to thank my teammates _hadil_ and _killkillkill_ for their huge efforts . I was both tired and sleep deprived during the CTF and i was about to give up and go to bed numerous times. You are great teammates !
Now, all my gratitude to the Securinets Technical Team for writing these numerous challenging and fun tasks that allowed in 6 hours to learn many new things.
