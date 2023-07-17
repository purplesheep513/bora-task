# 웹 서버 확인 방법

```
$ git clone https://github.com/purplesheep513/bora-task.git
$ cd /bora-task
$ npm install
$ npm run start
```

또는 url 접속 : https://borayang5.web.app/

# 개발환경

## 사용 툴
- React
  - 선정 이유 : 레진 엔터테인먼트에서 React로 마이그레이션을 진행하고 있다고 하여서 선택하였습니다.
- TypeScript
  - 선정 이유 : 타입스크립트를 이용해 개발단계에서 타입을 지정하면 런타임에서 발생할 수 있는 타입 오류를 방지할 수 있어 자바스크립트 기반 프레임워크를 이용할 때 항상 사용하고자 합니다.
- vite / 웹팩
  - 두 가지 번들러를 사용한 이유
    - 사실대로 말하자면 조금 욕심이었던 것 같습니다. 처음에는 작은 프로젝트이기도 하고 간편하고 가벼운 번들러인 vite를 사용하려고 결심했는데, vite가 너무 간편하다보니 웹팩으로 개발 구성하는 것을 도전해보고 싶었습니다. 잘 보이려는 욕심에 결국 두개의 번들러를 사용하게 되었습니다. 그리하여 빌드와 웹서버를 띄울 때 바이트와 웹팩 둘 중 하나를 선택하는 상황이 발생하였습니다. 혼란을 드려 죄송합니다.
- firebase
  - 선정 이유 : 사용하기 쉽고 배포가 매우 편리해 url로 과제를 전송해드리고자 선정하게 되었습니다.
- HTTP 클라이언트 라이브러리 : axios
  - axios를 사용해 api를 불러오려고 하였으나, 전달받은 요청 URL 데이터값이 제대로 나오는 것 같지 않았습니다.
  - ![image](https://github.com/purplesheep513/bora-task/assets/72682862/0173bf8f-1c1c-4ef4-a941-3b612176da50)
  - ![image](https://github.com/purplesheep513/bora-task/assets/72682862/ae261561-cdb1-48de-b099-eb4dd6d7f3c8)
  - GET /api/comics/romance?page=넘버(1-5) 인것으로 전달받았습니다
  - 백엔드 서버를 구축할까 고민 하다가 목업 데이터를 임시로 사용하게 되었습니다.
- UI 라이브러리 : **Material UI**
- 선정 이유 :
    - 활발한 개발자 커뮤니티가 지원되고 예제와 튜토리얼이 잘 되어있어 사용하기가 편했습니다.
    - Material UI의 컴포넌트가 코믹스의 이미지와 정보를 표현하기 적합하다고 생각해 선정했습니다.
