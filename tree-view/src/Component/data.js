export const menus=[
    {
        label:"Home",
        to:'/',
    },
    {
        label:'Profile',
        to:'Profile',
        children:[
            {
                label:"Details",
                to:'Details',
        children:[
            {
                label:'Location',
                to:'Location',
                children:[
                    {
                        label:'City',
                        to:'City'
                    },
                ],
            },
        ],
    },
],
},
{
    label:"Settings",
    to:"/Settings",
    children:[
        {
            label:"Account",
            to:"Account"
        },
        {
            label:"Security",
            to:"Security",
            children:[
                {
                    label:"Login",
                    to:"Login",

                },
                {
                    label:"Register",
                    to:"Register",
                    children:[
                        {
                            label:"Random Data",
                            to:""
                        }
                    ]
                }
                

            ]
        },

    ]
}
]
export default menus
