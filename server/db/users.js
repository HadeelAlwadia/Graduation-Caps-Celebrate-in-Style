const usersInfo = require("./usersInfo");



module.exports=[
    {
          id:'1',
          products:[

          {
            productId:'103',
            name:'cap1',
            desc:'loarn is per',
            colors:['red','blue'],
            numofItem:4
          }
        ],
         requests:[
          {
            requestId: '101',
            type: "request1 ",
            description: "User has forgotten their password and needs a reset.",
            status: "panding",
            submittedAt: "2025-01-01T09:00:00Z",
          },
          {
            requestId: '102',
            type: "request2",
            description: "User reports an issue with the mobile app crashing on startup.",
            status: "resolve",
            submittedAt: "2025-01-02T10:30:00Z",
          },
          {
            requestId: '103',
            type: "request3",
            description: "User requests the ability to sort products by price range.",
            status: "Reviewed",
            submittedAt: "2025-01-03T11:15:00Z",
          }
        ],
         users : usersInfo.map(user=>({userId:user.id,name:user.name,type:user.type,numOfRequest:user.numOfRequest}))

}
      

]

