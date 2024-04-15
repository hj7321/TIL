# TIL
Today I Learned

## 0415_Day1
### 1. 리눅스 명령어
- 대학교 1학년과 3학년 때(재수강) <리눅스 시스템 관리>라는 전공과목에서 봤던 명령어들이라 반가웠다.
- pwd가 'print working directory'라는 건 까먹고 있었는데, 이 기회를 통해 다시 한 번 복습할 수 있어서 좋았다.
### 2. Git과 GitHub의 개념/차이점
- Git과 GitHub의 정확한 개념과 차이점을 알게 되었다.
  - Git : 코드 변경점 기록, 버전 관리 **도구**
  - GitHub : 온라인 코드 **저장소** (백업/공유/협업)
### 3. Git 명령어
- 전공자이지만 깃허브를 제대로 사용해본 적이 없어서 Git 명령어에 대해서도 정확히 모르고 있었는데, 이번 기회를 통해 Git 명령어와 사용법을 익힐 수 있어서 좋았다.
  - git init : 코드 관리를 시작하는 명령어
  - git add *파일명* : 저장하기 전 저장할 파일을 지정하는 명령어
  - git commit -m "*커밋 메시지*" : 실제로 저장하는 명령어
  - git status : 저장 여부를 확인하는 명령어
  - git log : 저장 내역을 확인하는 명령어
  - git push origin *브랜치명* : 추가로 수정된 코드 GitHub에 반영하는 명령어
  - git clone : 코드 복사하는 명령어
  - git pull origin *브랜치명* : 다른 사람이 변경한 코드를 자신의 코드로 가져오는 명령어

### 4. GitHub로 코드 백업하기
- [STEP 1] 온라인 저장소(GitHub repository)를 만든다.
- [STEP 2] 로컬에 있는 코드를 GitHub repository로 업로드한다.
   ```
   git remote add origin [GitHub repository 주소]
   git branch -M main
   git push -u origin main
   ```
- [STEP 3] 추가로 수정된 코드를 GitHub에 반영한다.

### 5. GitHub 협업 기초와 충돌 해결법
