const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;

        let str = `i am ${age} and i speake: `;

        languages.forEach(function (lang){
            str += `${lang.toUpperCase()}`;
        });

        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let str = '';
    for (let key in programmingLangs) {
        str += `language ${key} learned on ${programmingLangs[key]}\n`
    }
    return str;
} 

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



