// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, heterogenous
// numeric enum
var ReqType;
(function (ReqType) {
    ReqType[ReqType["ReadData"] = 1] = "ReadData";
    ReqType[ReqType["SaveData"] = 3] = "SaveData";
    ReqType[ReqType["GetData"] = 4] = "GetData";
    ReqType[ReqType["DeleteData"] = 5] = "DeleteData";
})(ReqType || (ReqType = {}));
// console.log(ReqType);
// console.log(ReqType.SaveData);
console.log(ReqType["ReadData"]);
// string enum
var ReqType2;
(function (ReqType2) {
    ReqType2["readData"] = "READ_DATA";
    ReqType2["deleteData"] = "DELETE_DATA";
})(ReqType2 || (ReqType2 = {}));
// console.log(ReqType2.deleteData);
console.log(ReqType2["deleteData"]);
// heterogenous enum
var ReqType3;
(function (ReqType3) {
    ReqType3["readData"] = "READ_DATA";
    ReqType3["deleteData"] = "DELETE_DATA";
    ReqType3[ReqType3["id"] = 101] = "id";
})(ReqType3 || (ReqType3 = {}));
console.log(ReqType3.id);
console.log(ReqType3["readData"]);
