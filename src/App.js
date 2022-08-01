import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UseStateExample from './learnUseState/UseStateExample'
import UseStateObject from './learnUseState/UseStateObject'
import UseStateArray from './learnUseState/UseStateArray'
import UseStateCounter from './learnUseState/UseStateCounter'

import IndexMemo from './UseMemo/Index'

import IndexProp from './propTypes/Index'

import CustomHook from './CustomHooks/CustomHook'

import ContextApi from './ContextApi/ContextApi'
import PropDrilling from './PropDrilling/PropDrilling'

import IndexReducer from './LearnUseReducer/Index'

import UseRefBasic from './learnUseRef/UseRefBasic'

import MultipleInputs from './forms/MultipleInputs'
import ControlledInputs from './forms/ControlledInputs'

import MultipleReturns from './conditional-rendering/MultipleReturns'
import ShortCircut from './conditional-rendering/ShortCircut'
import ShowHide from './conditional-rendering/ShowHide'

import UseEffectBasic from './learnUseEffect/UseEffectBasic'
import UseEffectCleanUp from './learnUseEffect/UseEffectCleanUp'
import UseEffectFetch from './learnUseEffect/UseEffectFetch'
import Error from './Error'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/UseStateExample" element={<UseStateExample />} />
          <Route path="UseStateArray" element={<UseStateArray />} />
          <Route path="MultipleInputs" element={<MultipleInputs />} />
          <Route path="ControlledInputs" element={<ControlledInputs />} />
          <Route path="UseEffectBasic" element={<UseEffectBasic />} />
          <Route path="UseStateObject" element={<UseStateObject />} />
          <Route path="UseStateCounter" element={<UseStateCounter />} />
          <Route path="UseEffectCleanUp" element={<UseEffectCleanUp />} />
          <Route path="useeffectfetch" element={<UseEffectFetch />} />
          <Route path="MultipleReturns" element={<MultipleReturns />} />
          <Route path="ShortCircut" element={<ShortCircut />} />
          <Route path="ShowHide" element={<ShowHide />} />
          <Route path="UseRefBasic" element={<UseRefBasic />} />
          <Route path="PropDrilling" element={<PropDrilling />} />
          <Route path="ContextApi" element={<ContextApi />} />
          <Route path="CustomHook" element={<CustomHook />} />
          <Route path="IndexMemo" element={<IndexMemo />} />
          <Route path="IndexProp" element={<IndexProp />} />
          <Route path="IndexReducer" element={<IndexReducer />} />
          <Route path="*" element={<Error />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
