export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true                   //hotspot helps user to crop the image while uploading. Is is sanity feature. Check in theri documentaion.
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
    ]
}