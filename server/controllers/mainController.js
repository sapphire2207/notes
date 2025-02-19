// Get Homepage

exports.homepage = async(req,res) => {
    const locals = {
        title: 'Notes App',
        description: 'Free Notes App' 
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

// Get aboutpage

exports.aboutpage = async(req,res) => {
    const locals = {
        title: 'About Notes App',
        description: 'Free Notes App' 
    }
    res.render('about', locals);
}
