//Get 
const getAllKingdoms = (req, res) => {
    res.json({
        status: 'Success',
        message: 'List of Kingdom',
        data: []
    });
}

//Post
const createKingdom = (req, res) => {
    res.json({
        status: 'Success',
        message: 'Kingdom create successfully',
        data: req.body
    });
}
//Update
const updateKingdom = (req, res) => {
    res.json({
        status: 'Success',
        message: 'Kingdom update successfully',
        data: { id: req.params.id, ...req.body }
    });
}
//Delete
const deleteKingdom = (req, res) => {
    res.json({
        status: 'Success',
        message: 'Kingdom deleted successfully',
        data: { id: req.params.id }
    });
}

export default {
    getAllKingdoms,
    createKingdom,
    updateKingdom,
    deleteKingdom
}