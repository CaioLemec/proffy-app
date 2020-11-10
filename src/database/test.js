const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db)=> {
    proffyValue = {
        name:"AFF",
        avatar:"https://avatars3.githubusercontent.com/u/59886891?s=460&u=c09789e8cff4b19921b167962b5c760176316b5e&v=4",
        whatsapp:"+5521964331348",
        bio:"Um dos melhores peidadores de todos os tempos.<br><br>BláBláBlá!!!BláBláBlá!!!BláBláBlá!!!BláBláBlá!!!BláBláBlá!!!."
    }

    classValue = {
        subject: 1,
        cost:"20,00",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //mostrando os registros://
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)
    //consultar as classes de um determinado professor e trazer os dados do professor//
    const selectClassesAndProffys = await db.all (`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all (`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.classes_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)

    
})