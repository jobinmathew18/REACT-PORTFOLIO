import images from "../constants/images"

const projects = [
    {
        name: "Social Media Webapp",
        image: [
            images.social1,
            images.social2,
            images.social3,
            images.social4,
            images.social5,
        ],
        overview: "SocialSync is a MERN (MongoDB, Express, React, Node.js) stack social media webapp. It is an online platform that allows users to connect, share, and interact with others, typically through user-generated content. The MERN stack provides a comprehensive set of technologies for building social media applications, including a flexible NoSQL database (MongoDB), a powerful backend web framework (Express), a dynamic frontend UI library (React), and a server-side JavaScript runtime (Node.js), making it a popular choice for developing social media platforms with full-stack JavaScript. ",
        features: [
            "User Registration and Authentication: Users can login and create an account on the application. Authentication mechanisms, such as password hashing (using bcrypt) and JWT (JSON Web Token) are implemented to ensure secure user authentication.",
            "User Profiles: Users can create and manage their profiles, including uploading profile pictures and cover pictures, updating personal information, and viewing their own or others' profiles. User profiles also include features such as a bio, posts, followers/following and posts counts.",
            "Social Interactions: Users can follow/unfollow, friend, or connect with other users, and interact with them through features such as liking, commenting, and messaging. ",
            "Real time Messaging: Messaging features allow users to communicate with each other privately. Socket.io is used for real time communication. And users can also see other online users",
            "Various react hooks are used such as useState, useEffect, useContext, useReducer, useNavigate, useParams, useRef etc."
        ]
    },
    {
        name: "MarketPlace Webapp",
        image: [
            images.shopping1,
            images.shopping2,
            images.shopping3,
            images.shopping4,
            images.shopping5,
            images.shopping6,
            images.shopping7,
            images.shopping8,
            images.shopping9,
            images.shopping10,
            images.shopping11,
            images.shopping12,
            images.shopping13,
        ],
        overview: "StyleHive, a MERN (MongoDB, Express, React, Node.js) Marketplace web application is a web-based platform that allows sellers to list fashion related products or services for sale and buyers to purchase them.",
        features: [
            " Styled-components are used for styling.",
            "There are two modules: user and admin.",
            "React redux and redux toolkit is used for state management.",
            "Passwords are hashed using bcrypt.js and JWT (JSON Web Token) are implemented to ensure secure user authentication.",
            "JWT token is stored in cookies therefore user dont have to login again and again.",
            "User can view, add to cart and purchase products based on their categories.",
            "Stripe payment gateway is used.",
            "Admin can add, update, view and delete products.",
            "Google Firebase storage is used for storing products."
        ]
    },
    {
        name: "YouTube Clone",
        image: [
            images.youtube1,
            images.youtube2,
            images.youtube3,
            images.youtube4,
            images.youtube5,
            images.youtube6,
            images.youtube7,
            images.youtube8,
        ],
        overview: "A MERN (MongoDB, Express, React, Node.js) YouTube clone is a web application that allows users to upload, view, and share videos.",
        features: [
            "Exact User Interface of YouTube. Styled-components are used for styling.",
            "React redux and redux toolkit is used for state management.",
            "Dark mode and light mode.",
            "JWT (JSON Web Token), hashed password using bcrypt.js and cookies are used for user authentication",
            "Google firebase authentication",
            "User can perform functionalities such as like, dislike, comment, subscribe, unsubscribe.",
            "User can view trending and subscribed videos.",
            "User can also upload, update and delete their videos.",
            "Videos are stored in Google Firebase storage.",
            "Similar video suggestions and search functionality is also implemented."
        ]
    },
    {
        name: "Realtime Pizza Delivery website",
        image: [
            images.pizza1,
            images.pizza2,
            images.pizza3,
            images.pizza4,
            images.pizza5,
            images.pizza6,
        ],
        overview: "A full-stack dynamic website with user-admin authentication where user receive real time response from the admin for every order updates. Socket.io is used for real time response and for authentication Passport middleware is used.",
        features: [
            "Realtime response on every order update from admin.",
            "Authentication using passport middleware."
        ]
    },
    {
        name: "Recipe Bloggin website",
        image: [
            images.recipe1,
            images.recipe2,
            images.recipe3,
            images.recipe4,
            images.recipe5,
            images.recipe6,
            images.recipe7,
        ],
        overview: "A fully Dynamic website where a user can publish their own recipes along with the images and can also view other's recipes as well."

    },
    {
        name: "Netflix Clone",
        overview: "A responsive Netflix clone (front-end only) using Html, CSS and JavaScript. TMDB api is used to fetch images, movie names and other data.",
        url: "https://jobinmathew18.github.io/netflix-Clone.github.io/"
    },
    {
        name: "Modern Website Layout",
        overview: "A frontend layout of a modern website using Html and CSS.",
        url: "https://usabilityhub-modernwebsite.netlify.app/"
    },
    {
        name: "iNoteBook",
        image: [
            images.inote1,
            images.inote2,
            images.inote3,
            images.inote4,
            images.inote5,
        ],
        overview: "iNoteBook is a react based local cloud storage where user can store, fetch, edit and delete their personal notes. And for authentication JWT is used.",
        features: [
            "React useContext hook.",
            "JWT authentication.",
            "User login/register."
        ]
    },
    {
        name: "newsApp",
        image: [images.new1],
        overview: "newsApp is a react + REST api application where user can infinitely scroll news based on their category."
    },
    {
        name: "textUtils",
        url: "https://textutils-reactwebsite.netlify.app/",
        overview: "TextUtils is a very basic react application where you can count number of words and letters, copy and change your text to upper case. User can also change appearance of the application by enabling dark mode and light mode."
    }
]

export default projects