# HomeCCTV
HomeCCTV Project which use opencv4nodejs

Using Express,React,Socket-io,opencv


-- Installation Guid --
https://sungw.tistory.com/4 여기 참고했음

일단 c make, node-gyp ,choco 로 openCV 컴퓨터에 설치하고 환경변수를 잘설정해야함  (global windows-build-tools 필요없음)
환경 변수는 아래와 같으며 무조건 OPENCV_BIN_DIR 을 PATH 에 추가 해줘야 한다.
워킹 디렉토리 설치 순서는 node-gyp 을 먼저 깔고 그다음에 opencv4nodejs 를 설치한다. (시간이 오래걸리니까 당황하지말고 기다릴 것)
OPENCV_LIB_DIR = C:\tools\opencv\build\x64\vc15\lib
OPENCV_BIN_DIR = C:\tools\opencv\build\x64\vc15\bin
OPENCV_INCLUDE_DIR = C:\tools\opencv\build\include 


node-gyp 파이썬 실행프로그램을 못찾는 에러가 자꾸 발생하였는데
내 디렉토리에 있는 한글 이름이 원인이였다 , 해결하기 위해선
PYPATH 를 영어로만 구성되어있는 곳으로 옮기거나 혹은 윈도우 사용자 폴더명을 영어로 변경해야한다. 이는 좀 번거로우나 나는 나중을 위해 진행하였다.
-- end -- 
