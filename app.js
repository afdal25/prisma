const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

const createSmartphone = async (req, res, next) => {
    try {
        const result = await prisma.smartphone.create({
            data : {
                smartphone: req.body.smartphone
            }
        })
        return res.json({
            status: true,
            message: "Data berhasil diinput ke tabel smartphone",
            data: result
        })
    } catch(eror){
        next(eror);
    }
}

const getSmartphone = async (req, res, next) => {
    try{
        const result = await prisma.smartphone.findMany()
    } catch(eror) {
        next(eror)
    }
}