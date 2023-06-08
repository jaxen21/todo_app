const todo_data = [
    {
        "status": "todo",
        "title": "Plan vacation",
        "description": "Research and decide on a travel destination, book flights and accommodation",
        "subtasks": [
            {
                "status": "todo",
                "title": "Research travel destinations",
                "description": "Read travel blogs and reviews to gather information about potential destinations"
            },
            {
                "status": "todo",
                "title": "Book flights",
                "description": "Search for the best flight deals and book tickets"
            },
            {
                "status": "todo",
                "title": "Book accommodation",
                "description": "Find suitable accommodation options and make reservations"
            }]
    },
    {
        "status": "inprogress",
        "title": "Write blog post",
        "description": "Compose an engaging blog post about recent industry trends",
        "subtasks": [
            {
                "status": "done",
                "title": "Research industry trends",
                "description": "Gather information from reliable sources and stay updated on the latest developments"
            },
            {
                "status": "inprogress",
                "title": "Outline the blog post",
                "description": "Create a structured outline for the content and main points"
            },
            {
                "status": "todo",
                "title": "Write the first draft",
                "description": "Begin writing the blog post using the outline as a guide"
            },
            {
                "status": "todo",
                "title": "Revise and edit",
                "description": "Review and refine the content for clarity, grammar, and style"
            }
        ]
    },
    {
        "status": "done",
        "title": "Organize birthday party",
        "description": "Plan and host a memorable birthday celebration for a loved one",
        "subtasks": [
            {
                "status": "done",
                "title": "Create guest list",
                "description": "Compile a list of friends and family members to invite"
            },
            {
                "status": "done",
                "title": "Choose a venue",
                "description": "Select a suitable location for the party, such as a restaurant or home"
            },
            {
                "status": "done",
                "title": "Order cake and decorations",
                "description": "Place an order for a birthday cake and purchase party decorations"
            },
            {
                "status": "done",
                "title": "Send out invitations",
                "description": "Send invitations to the guests with all the necessary details"
            }
        ]
    },
    {
        "status": "todo",
        "title": "Learn a new language",
        "description": "Start learning a foreign language to broaden horizons and enhance communication skills",
        "subtasks": [
            {
                "status": "todo",
                "title": "Choose a language",
                "description": "Decide on which language to learn based on personal interests or career goals"
            },
            {
                "status": "todo",
                "title": "Find learning resources",
                "description": "Research and identify suitable textbooks, online courses, or language apps"
            },
            {
                "status": "todo",
                "title": "Practice speaking",
                "description": "Engage in conversation practice with native speakers or language exchange partners"
            }
        ]
    },
    {
        "status": "inprogress",
        "title": "Renovate the kitchen",
        "description": "Give the kitchen a fresh look by remodeling and upgrading its features",
        "subtasks": [
            {
                "status": "done",
                "title": "Create a design plan",
                "description": "Consult with an interior designer and develop a detailed plan for the renovation"
            },
            {
                "status": "inprogress",
                "title": "Purchase new appliances",
                "description": "Research and buy modern kitchen appliances that fit the design theme"
            },
            {
                "status": "todo",
                "title": "Hire a contractor",
                "description": "Find a reliable contractor to handle the renovation work"
            },
            {
                "status": "todo",
                "title": "Install new cabinets and countertops",
                "description": "Replace the old cabinets and countertops with new ones"
            }
        ]
    }
]

export { todo_data }