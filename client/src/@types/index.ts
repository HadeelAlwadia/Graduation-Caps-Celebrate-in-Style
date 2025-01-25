import { ReactElement } from "react"

interface Iaction{type:string,payload?:any} 



interface IappState{
    theme:'light'|'dark',
    userInfo: {data:Iuser|null,loading:boolean,error:string},
    requestsUser:{data:Irequest[]|null,loading:boolean,error:string},
    usersAdmin:{data:Iuser[]|null,loading:boolean,error:string},
    productsAdmin:{data:Iproduct[]|null,loading:boolean,error:string}
   dispatch:React.Dispatch<Iaction>

}


interface IuserInfo{
email:string,
password:string,
name?:string
}

interface Iuser{
    name:string,
    type:'user'|'admin',
    numOfRequests:number,
    id:string
}


interface Irequest{
    requestId: string,
    type: string,
    description: string,
    status: string,
    submittedAt: string,
}

interface Iproduct{
    productId: string,
    type: string,
    desc: string,
    color:string[],
    numOfItem:number
}
interface IcardParm{
    bkUrl:string,
    dataOfCard:Record<string,any>,
    nameOfAction: string,
    nameOfItem:string
}
 type typeActionKeys='userInfo' |'requestsUser'|  'usersAdmin'| 'productsAdmin'

 type typeAppStateKeys='requestsUser'|'productsAdmin'|'usersAdmin'

type Icard=Iproduct|Irequest|Iuser

type typeObject=Record<string,any>

interface Iform {
    values?:typeObject
    childern: ReactElement
    handleSubmitForm: (values:typeObject)=>void,
    errors?:typeObject,
    handleChangeValue?:(key:string,value:string)=>void
}


export type {IuserInfo,Irequest,Iuser,Iproduct,IappState,Iaction,typeActionKeys,typeAppStateKeys,Icard,Iform,typeObject,IcardParm}
