//Get
const getAllPhylums = (req, res) => {
    res.json({
        status: 'Success',
        message: 'List of Phylum',
        data: []
    });
}
//Post
const createPhylum = (req, res) => {
    res.json({
        status: 'Success',
        message: 'Phylum create successfully',
        data: req.body
    });
}
//Update
const updatePhylum = (req, res) => {
    res.json({
        status: 'Success',
        message: 'Phylum update successfully',
        data: { id: req.params.id, ...req.body }
    });
}
//Delete
const deletePhylum = (req, res) => {
    res.json({
        status: 'Success',
        message: 'Phylum deleted successfully',
        data: { id: req.params.id }
    });
}

export default {
    getAllPhylums,
    createPhylum,
    updatePhylum,
    deletePhylum
}