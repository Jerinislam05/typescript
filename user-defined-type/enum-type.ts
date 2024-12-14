// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, heterogenous

// numeric enum
enum ReqType {
    ReadData =1,
    SaveData =3,
    GetData,
    DeleteData,
}
// console.log(ReqType);
// console.log(ReqType.SaveData);
console.log(ReqType["ReadData"]);

// string enum
enum ReqType2 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
}
// console.log(ReqType2.deleteData);
console.log(ReqType2["deleteData"]);

// heterogenous enum
enum ReqType3 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = 101,
}
console.log(ReqType3.id);
console.log(ReqType3["readData"]);
