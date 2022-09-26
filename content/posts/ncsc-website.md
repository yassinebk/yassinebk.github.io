---
title: National Cybersecurity Website 
date: 2022-06-29
cover-image-large: https://res.cloudinary.com/dsdvvwb8v/image/upload/v1656454904/large_main_frame_3611b0aeef.jpg
cover-image-small: https://res.cloudinary.com/dsdvvwb8v/image/upload/v1656454905/small_main_frame_3611b0aeef.jpg

tags: ['Web development', 'Next JS', 'UI/UX']
---

# National Cybersecurity Website 

## Goal of the Website 

Design and Develop a Website the National Cybersecurity Congress. The app should allow: 

- **Registration in the event** 
- **Accommodation Booking** 
- **Display of various informations about the event** ( Program , About , Contact us )

## Design process

I was still heavily influenced by the minimalistic movement then so I preferred a simple design with on point interactions and heavy focus on accessibility. Getting lost on this website meant an immediate disinterest from the event and that was something I could not risk. 

### The Palette:

 No big Thinking here, I used the same color palette as the Social Media posts. 
 Black my primary and red my secondary with two shades to set the emphasis level. 

![ Design Palette ](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1656454904/large_Design_Tokens_dc2ea95697.png)


### Typography

 The Main font was **Exo**, a cool sans-serif font with really soft edges kinda looks like poppins but it's lighter and has a professional vibe. The spacing between letters were a bit larger than other fonts like Roboto which made it easier to read and made me use heavier weights comfortably.

 **Techno Hideo**: was my display font It showed the techie vibe of the event.

![Typography](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1656454904/large_Logos_b3afd0ca8f.png)

## The Design: 

![Design Overview](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1656455568/large_design_overview_ca613858b3.png)

 #### Two click rule
 
 If you keep count you should find yourself navigating to where you want or getting an action done always with 2 clicks or less. This made the registration process seems smooth and the booking flow simpler than most Google Forms or Microsoft Forms.
 

#### Responsiveness

 Due to the small time I had to develop the app, I went easy on myself and the whole responsiveness process was about changing layouts and removing unnecessary elements from the UI.



### Program Section

In the program section the white transforms to gray and that to gives the User the feeling of entering a new separate section of the website. I had fun with the animations as I tried to give a fully interactive experience for the user with the event's program.


![Program Section Design ](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1656454904/large_Program_design_7e4f2dcf6d.png)

## Development

- **NextJS** was what I used for the development
- **Tailwind CSS** as styling library to fasten things up. 
- **Framer Motion** : React Animation Library, that offers a lot of features to make complex and cool animations. I didn't want to go for GreenSock as I wasn't that familiar with it at that time.
- **No State Management Library** : I used React Contexts.
- **Data Fetching and API Calls** : React Query, one of the best libraries that I have learned this year and have greatly improved my websites in term of both performance and DX. This library just sums up at least 4 hooks that I was using and help me control the data caching and we should not forget the optimistic UI option. Well, it really made me think do we still need Graphql ? 



## In Conclusion

A very challenging project, I am really proud of the outcome. Despite the simple design people had a little problem with the registration process as It demanded a good password. The problem was quickly  remediated by adding more informative messages across the password field part.

 I want to thank Hazem Ben Said who developed the backend and endured my never ending questions. 


Website Link : 
[NCSC National Cybersecurity Congress](https://nationalcybersecuritycongress.vercel.app/)
