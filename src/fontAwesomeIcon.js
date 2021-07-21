import Vue from "vue"; // 설치했던 fontawesome-svg-core와 vue-fontawesome 

import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 

// 설치했던 아이콘파일에서 해당 아이콘만 불러옴
import {faMobileAlt, faEnvelope, faCheck, faHome, faUser, faFile, faHandPointDown} from "@fortawesome/free-solid-svg-icons"; 
// import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"; 

// 불러온 아이콘을 라이브러리에 담음
library.add(faMobileAlt, faEnvelope, faCheck, faHome, faUser, faFile, faHandPointDown); 

// fontawesome아이콘을 Vue탬플릿에 사용할 수 있게 등록 
Vue.component("font-awesome-icon", FontAwesomeIcon);