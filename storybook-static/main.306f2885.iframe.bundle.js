(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),client=(__webpack_require__("./stories/theme.css"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");Object(client.addDecorator)((function(story){return Object(jsx_runtime.jsx)("div",{className:"wizard-container",children:story()})}));var parameters={actions:{argTypesRegex:"^on.*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./stories/theme.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"\nh2 {\n  color: rgb(13, 88, 123);\n  font: bold calc(1em + 2 * (50vw - 70px) / 100) 'Dancing Script', cursive,\n  fantasy;\n}\n\nh3 {\n  color: rgb(13, 88, 123);\n}",""]),module.exports=exports},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$":function(module,exports,__webpack_require__){var map={"./StepFlowWizard.stories.tsx":"./stories/StepFlowWizard.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$"},"./stories/StepFlowWizard.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return StepFlowWizard_stories_Primary})),__webpack_require__.d(__webpack_exports__,"ConditionalRenderingOfStep",(function(){return StepFlowWizard_stories_ConditionalRenderingOfStep}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),InputLabel=__webpack_require__("./node_modules/@mui/material/InputLabel/InputLabel.js"),Select=__webpack_require__("./node_modules/@mui/material/Select/Select.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),utils=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),{NEXT:"next",PREVIOUS:"previous",ERROR:"error",GOTO_SCREEN:"gotoScreen"}),shouldRenderScreen=function shouldRenderScreen(screen,aggregatedProps){var shouldRender=screen.shouldRender,shouldRenderCachedValue=screen.shouldRenderCachedValue;if(shouldRenderCachedValue)return shouldRenderCachedValue;var shouldRenderValue=!shouldRender||shouldRender(aggregatedProps);return function updateShouldRenderCache(screen,shouldRender){Object.assign({},screen,{shouldRenderCachedValue:shouldRender})}(screen,shouldRenderValue),shouldRenderValue},getIndexOfComponent=function getIndexOfComponent(componentName,screens,aggregatedProps){var index=screens.findIndex((function(screen){return screen.identifier===componentName}));return-1!=index&&shouldRenderScreen(screens[index],aggregatedProps)?index:-1},getNextScreenIndex=function getNextScreenIndex(screens,currentIndex,isBackward,aggregatedProps){var nextIndex=isBackward?currentIndex-1:currentIndex+1;return function isIndexOutOfBound(screens,index){return index<0||index>=screens.length}(screens,nextIndex)?-1:shouldRenderScreen(screens[nextIndex],aggregatedProps)?nextIndex:getNextScreenIndex(screens,nextIndex,isBackward,aggregatedProps)},getNextScreen=function getNextScreen(screens,currentIndex,isBackward,componentName,aggregatedProps){if(componentName){var indexOfComponent=getIndexOfComponent(componentName,screens,aggregatedProps);if(indexOfComponent>=0)return indexOfComponent}return getNextScreenIndex(screens,currentIndex,isBackward,aggregatedProps)},getNextScreenByIdentifier=function getNextScreenByIdentifier(screens,componentName,aggregatedProps){if(componentName){var indexOfComponent=getIndexOfComponent(componentName,screens,aggregatedProps);if(indexOfComponent>=0)return indexOfComponent}return-1};function reducer(state,action){var componentName,screens=state.screens,currentIndex=state.currentIndex,store=state.store,data={};if(action.payload){var _action$payload=action.payload;componentName=_action$payload.componentName;var _action$payload$data=_action$payload.data;data=void 0===_action$payload$data?{}:_action$payload$data}var aggregatedStore=Object.assign({},store,data);switch(action.type){case utils.PREVIOUS:return Object.assign({},state,{store:aggregatedStore,currentIndex:getNextScreen(screens,currentIndex,!0,componentName,aggregatedStore)});case utils.NEXT:return Object.assign({},state,{store:aggregatedStore,currentIndex:getNextScreen(screens,currentIndex,!1,componentName,aggregatedStore)});case utils.GOTO_SCREEN:return Object.assign({},state,{store:aggregatedStore,currentIndex:getNextScreenByIdentifier(screens,componentName,aggregatedStore)});case utils.ERROR:return Object.assign({},state,{error:action.error});default:throw new Error("Invalid action type")}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["screen","stepFlowWizardStore"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var WizardScreenRenderer_WizardScreenRenderer=function WizardScreenRenderer(props){var _props$screen=props.screen,identifier=_props$screen.identifier,component=_props$screen.component,stepFlowWizardStore=props.stepFlowWizardStore,rest=_objectWithoutProperties(props,_excluded),Container=component;return Object(jsx_runtime.jsx)("div",{children:Object(react.createElement)(Container,Object.assign({},props,{key:identifier},stepFlowWizardStore,rest))})};WizardScreenRenderer_WizardScreenRenderer.displayName="WizardScreenRenderer";var src_WizardScreenRenderer=WizardScreenRenderer_WizardScreenRenderer;try{WizardScreenRenderer_WizardScreenRenderer.displayName="WizardScreenRenderer",WizardScreenRenderer_WizardScreenRenderer.__docgenInfo={description:"",displayName:"WizardScreenRenderer",props:{screen:{defaultValue:null,description:"",name:"screen",required:!0,type:{name:"WizardScreen"}},onPreviousClick:{defaultValue:null,description:"",name:"onPreviousClick",required:!1,type:{name:"Function"}},onNextClick:{defaultValue:null,description:"",name:"onNextClick",required:!1,type:{name:"Function"}},onGoToScreen:{defaultValue:null,description:"",name:"onGoToScreen",required:!0,type:{name:"Function"}},onError:{defaultValue:null,description:"",name:"onError",required:!0,type:{name:"Function"}},stepFlowWizardStore:{defaultValue:null,description:"",name:"stepFlowWizardStore",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/WizardScreenRenderer.tsx#WizardScreenRenderer"]={docgenInfo:WizardScreenRenderer_WizardScreenRenderer.__docgenInfo,name:"WizardScreenRenderer",path:"src/WizardScreenRenderer.tsx#WizardScreenRenderer"})}catch(__react_docgen_typescript_loader_error){}var StepFlowWizard_excluded=["screens"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepFlowWizard_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function StepFlowWizard_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var initialState={currentIndex:0,screens:[],store:{}},StepFlowWizard_StepFlowWizard=function StepFlowWizard(props){var _useReducer=Object(react.useReducer)(reducer,function init(initialState,props){var screens=props.screens,rest=StepFlowWizard_objectWithoutProperties(props,StepFlowWizard_excluded);return Object.assign({},initialState,{screens:screens,store:Object.assign({},rest)})}(initialState,props)),_useReducer2=_slicedToArray(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1],handlePreviousClick=Object(react.useCallback)((function(payload){dispatch({type:utils.PREVIOUS,payload:payload})}),[props]),handleNextClick=Object(react.useCallback)((function(payload){dispatch({type:utils.NEXT,payload:payload})}),[props]),handleGoToScreen=Object(react.useCallback)((function(payload){dispatch({type:utils.GOTO_SCREEN,payload:payload})}),[props]),handleError=Object(react.useCallback)((function(payload){dispatch({type:utils.ERROR,payload:payload})}),[props]),screens=state.screens,currentIndex=state.currentIndex,store=state.store,nextScreenAvailable=function nextScreenPresent(screens,currentIndex,aggregatedProps){return-1!==getNextScreenIndex(screens,currentIndex,!1,aggregatedProps)}(screens,currentIndex,store),prevScreenAvailable=function previousScreenPresent(screens,currentIndex,aggregatedProps){return-1!==getNextScreenIndex(screens,currentIndex,!0,aggregatedProps)}(screens,currentIndex,store),activeWorkflowScreen=currentIndex in screens?screens[currentIndex]:void 0;return activeWorkflowScreen?Object(jsx_runtime.jsx)(src_WizardScreenRenderer,{screen:activeWorkflowScreen,onPreviousClick:prevScreenAvailable?handlePreviousClick:void 0,onNextClick:nextScreenAvailable?handleNextClick:void 0,onGoToScreen:handleGoToScreen,onError:handleError,stepFlowWizardStore:store}):null},src_StepFlowWizard=StepFlowWizard_StepFlowWizard;try{StepFlowWizard_StepFlowWizard.displayName="StepFlowWizard",StepFlowWizard_StepFlowWizard.__docgenInfo={description:"",displayName:"StepFlowWizard",props:{screens:{defaultValue:null,description:"",name:"screens",required:!0,type:{name:"WizardScreen[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/StepFlowWizard.tsx#StepFlowWizard"]={docgenInfo:StepFlowWizard_StepFlowWizard.__docgenInfo,name:"StepFlowWizard",path:"src/StepFlowWizard.tsx#StepFlowWizard"})}catch(__react_docgen_typescript_loader_error){}function StepFlowWizard_stories_slicedToArray(arr,i){return function StepFlowWizard_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function StepFlowWizard_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function StepFlowWizard_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return StepFlowWizard_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepFlowWizard_stories_arrayLikeToArray(o,minLen)}(arr,i)||function StepFlowWizard_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function StepFlowWizard_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"StepFlowWizard",component:src_StepFlowWizard};var StepFlowWizard_stories_Layout=function Layout(_ref){var part1=_ref.part1,part2=_ref.part2;return Object(jsx_runtime.jsxs)(Box.a,{sx:{backgroundColor:"#e9ecef",padding:"2%",minHeight:"200px"},children:[Object(jsx_runtime.jsx)(Box.a,{sx:{minHeight:"160px"},children:part1}),Object(jsx_runtime.jsx)(Box.a,{padding:1,sx:{paddingTop:"20px"},children:part2})]})};StepFlowWizard_stories_Layout.displayName="Layout";var StepFlowWizard_stories_Step1=function Step1(_ref2){var onNextClick=_ref2.onNextClick;return Object(jsx_runtime.jsx)(StepFlowWizard_stories_Layout,{part1:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h3",{children:" Step 1"}),"Welcome to the demo of StepFlowWizard. Each Component will receive the following props.",Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:"onNextClick: Function"}),Object(jsx_runtime.jsx)("li",{children:"onPreviousClick: Function"}),Object(jsx_runtime.jsx)("li",{children:"onGoToScreen: Function"}),Object(jsx_runtime.jsxs)("li",{children:["Each of these function can be invoked using an object with property `data: ","`"]})]})]}),part2:Object(jsx_runtime.jsx)(Stack.a,{spacing:2,direction:"row",children:Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onNextClick,children:"Next"})})})};StepFlowWizard_stories_Step1.displayName="Step1";var StepFlowWizard_stories_Step2=function Step2(_ref3){var onPreviousClick=_ref3.onPreviousClick,onNextClick=_ref3.onNextClick;return Object(jsx_runtime.jsx)(StepFlowWizard_stories_Layout,{part1:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h3",{children:" Step 2"}),Object(jsx_runtime.jsx)("div",{style:{flexGrow:2},children:"Demo of navigating to Next and Previous step."})]}),part2:Object(jsx_runtime.jsxs)(Stack.a,{spacing:2,direction:"row",children:[Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onPreviousClick,children:"Previous"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onNextClick,children:"Next"})]})})};StepFlowWizard_stories_Step2.displayName="Step2";var StepFlowWizard_stories_Step3=function Step3(_ref4){var onPreviousClick=_ref4.onPreviousClick,onNextClick=_ref4.onNextClick,_useState2=StepFlowWizard_stories_slicedToArray(Object(react.useState)("US"),2),country=_useState2[0],setCountry=_useState2[1];return Object(jsx_runtime.jsx)(StepFlowWizard_stories_Layout,{part1:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h3",{children:" Step 3"}),Object(jsx_runtime.jsxs)(Stack.a,{spacing:2,direction:"column",children:[Object(jsx_runtime.jsxs)("div",{children:["Demo of navigating to Next passing data, the passed data gets stored in the wizard store.",Object(jsx_runtime.jsx)("br",{}),"Further the wizard store gets exposed to all the screen components as props."]}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(InputLabel.a,{id:"demo-simple-select-label",children:"Select a country"}),Object(jsx_runtime.jsxs)(Select.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:country,label:"country",onChange:function handleSelectionChange(e){setCountry(e.target.value)},children:[Object(jsx_runtime.jsx)(MenuItem.a,{value:"US",children:"US"}),Object(jsx_runtime.jsx)(MenuItem.a,{value:"UK",children:"UK"}),Object(jsx_runtime.jsx)(MenuItem.a,{value:"IN",children:"IN"})]})]})]})]}),part2:Object(jsx_runtime.jsxs)(Stack.a,{spacing:2,direction:"row",children:[Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onPreviousClick,children:"Previous"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function handleGoNextWithData(){onNextClick({data:{selectedCountry:country}})},children:"Next with passing data"})]})})};StepFlowWizard_stories_Step3.displayName="Step3";var StepFlowWizard_stories_Step4=function Step4(_ref5){var onPreviousClick=_ref5.onPreviousClick,onNextClick=_ref5.onNextClick,selectedCountry=_ref5.selectedCountry;return Object(jsx_runtime.jsx)(StepFlowWizard_stories_Layout,{part1:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h3",{children:" Step 4"}),Object(jsx_runtime.jsxs)("div",{children:["The selected country from the previous step is: ",selectedCountry]})]}),part2:Object(jsx_runtime.jsxs)(Stack.a,{spacing:2,direction:"row",children:[Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onPreviousClick,children:"Previous"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onNextClick,children:"Next"})]})})};StepFlowWizard_stories_Step4.displayName="Step4";var StepFlowWizard_stories_Step5=function Step5(_ref6){var onPreviousClick=_ref6.onPreviousClick,onGoToScreen=_ref6.onGoToScreen;return Object(jsx_runtime.jsx)(StepFlowWizard_stories_Layout,{part1:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h3",{children:" Step 5"}),Object(jsx_runtime.jsx)("div",{children:"Demo of navigating to a screen based on identifier or screen name."})]}),part2:Object(jsx_runtime.jsxs)(Stack.a,{spacing:2,direction:"row",children:[Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onPreviousClick,children:"Previous"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(){return onGoToScreen({componentName:"step2"})},children:"Go to step-2"})]})})};StepFlowWizard_stories_Step5.displayName="Step5";var StepFlowWizard_stories_LastStep=function LastStep(_ref7){var onPreviousClick=_ref7.onPreviousClick,onGoToScreen=_ref7.onGoToScreen;return Object(jsx_runtime.jsx)(StepFlowWizard_stories_Layout,{part1:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h3",{children:" Step 5"}),Object(jsx_runtime.jsx)("div",{children:"Demo of navigating to a screen based on identifier or screen name."})]}),part2:Object(jsx_runtime.jsxs)(Stack.a,{spacing:2,direction:"row",children:[Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:onPreviousClick,children:"Previous"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(){return onGoToScreen({componentName:"step1"})},children:"Go to step-1"})]})})};StepFlowWizard_stories_LastStep.displayName="LastStep";var StepFlowWizard_stories_Primary=function Primary(){var screens=[{identifier:"step1",component:StepFlowWizard_stories_Step1},{identifier:"step2",component:StepFlowWizard_stories_Step2},{identifier:"step3",component:StepFlowWizard_stories_Step3},{identifier:"step4",component:StepFlowWizard_stories_Step4},{identifier:"step5",component:StepFlowWizard_stories_Step5}];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("h2",{children:"Step Flow Wizard"}),Object(jsx_runtime.jsx)(src_StepFlowWizard,{screens:screens})]})},StepFlowWizard_stories_ConditionalRenderingOfStep=function ConditionalRenderingOfStep(){var screens=[{identifier:"step1",component:StepFlowWizard_stories_Step1},{identifier:"step2",component:StepFlowWizard_stories_Step2,shouldRender:function shouldRender(){return!1}},{identifier:"step5",component:StepFlowWizard_stories_LastStep}];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("h2",{children:"Step Flow Wizard"}),Object(jsx_runtime.jsx)(src_StepFlowWizard,{screens:screens})]})};StepFlowWizard_stories_Primary.parameters=Object.assign({storySource:{source:"() => {\n  const screens = [\n    {\n      identifier: 'step1',\n      component: Step1\n    },\n    {\n      identifier: 'step2',\n      component: Step2\n    },\n    {\n      identifier: 'step3',\n      component: Step3\n    },\n    {\n      identifier: 'step4',\n      component: Step4\n    },\n    {\n      identifier: 'step5',\n      component: Step5\n    }\n  ];\n\n  return (\n    <>\n     <h2>Step Flow Wizard</h2>\n     <StepFlowWizard\n        screens={screens}\n      />  \n    </>\n     \n  );\n}"}},StepFlowWizard_stories_Primary.parameters),StepFlowWizard_stories_ConditionalRenderingOfStep.parameters=Object.assign({storySource:{source:"() => {\n  const screens = [\n    {\n      identifier: 'step1',\n      component: Step1\n    },\n    {\n      identifier: 'step2',\n      component: Step2,\n      //this component doesn't get rendered.\n      shouldRender: () => false\n    },\n    {\n      identifier: 'step5',\n      component: LastStep\n    }\n  ];\n\n  return (\n    <>\n     <h2>Step Flow Wizard</h2>\n     <StepFlowWizard\n        screens={screens}\n      />  \n    </>\n     \n  );\n}"}},StepFlowWizard_stories_ConditionalRenderingOfStep.parameters)},"./stories/theme.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./stories/theme.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);