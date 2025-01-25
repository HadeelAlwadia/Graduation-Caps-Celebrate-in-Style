import Btn from "../common/button"
import { Countainer } from "../common/countainer"

interface ItitlePage{
    name:string,
    handleToggleCom:()=>void
}

const TitlePage = ({name,handleToggleCom}:ItitlePage) => {
  return (
    <Countainer
    childern={<>
      <h1>All {name}</h1>
      <Btn type="button" name={`add ${name}`} handleClick={handleToggleCom} />
    </>}
    style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 13px', }}
  >
  </Countainer>
  )
}

export default TitlePage
