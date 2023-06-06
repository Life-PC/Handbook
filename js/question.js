let questions = [];
let questionCounts = 1;
let questionCount = 1;
let choiceCount = -1;

window.onload = function() {
    let param = getParam('g');

    if (param === 'day') {
        dayQuestion();
    }
    else if (param === 'week') {
        weekQuestion();
    }
    else {
        millionQuestion();
    }

    questionDisplaySet();
};


function dayQuestion() {
    questionCount = Math.floor(Math.random() * 3);
    questionCount = questionCount === 0 ? 1 : questionCount;
    
    for (let i = 0; i < questionCount; i++) {
        let questionChapter = Math.floor(Math.random() * 11);
        let questionChapterCount = Math.floor(Math.random() * (questionTextGroup[questionChapter].length - 1));

        questions.push(
            [
                questionChapter,
                questionChapterCount,
                questionTextGroup[questionChapter][questionChapterCount][0],
                questionTextGroup[questionChapter][questionChapterCount][1],
                questionTextGroup[questionChapter][questionChapterCount][2],
                questionTextGroup[questionChapter][questionChapterCount][3],
                0, // 正解
                0, // 答えを見たか
                -1 // 答えた選択肢
            ]
        );
    }
}

function weekQuestion() {
    questionCount = 12;
    
    for (let i = 0; i < questionCount; i++) {
        let questionChapter = i;
        let questionChapterCount = Math.floor(Math.random() * (questionTextGroup[questionChapter].length - 1));

        questions.push(
            [
                questionChapter,
                questionChapterCount,
                questionTextGroup[questionChapter][questionChapterCount][0],
                questionTextGroup[questionChapter][questionChapterCount][1],
                questionTextGroup[questionChapter][questionChapterCount][2],
                questionTextGroup[questionChapter][questionChapterCount][3],
                0, // 正解
                0, // 答えを見たか
                -1 // 答えた選択肢
            ]
        );
    }
}

function millionQuestion() {
    questionCount = 100;
    let qustionCountOver = 100;
    for (let i = 0; i < 12; i++) {
        let questionChapter = i;
        let questionChapterRand = i === 11 ? qustionCountOver : Math.floor(Math.random() * 10);
        questionChapterRand = questionChapterRand < 7 ? 7 : questionChapterRand;
        let chapterCountCheck = '';
        for (let j = 0; j < questionChapterRand; j++) {
            let questionChapterCount = Math.floor(Math.random() * (questionTextGroup[questionChapter].length - 1));
            if (chapterCountCheck.indexOf('[' + questionChapterCount + ']') != -1) {
                j = j - 1;
                continue;
            }
            chapterCountCheck = chapterCountCheck + '[' + questionChapterCount + ']';

            questions.push(
                [
                    questionChapter,
                    questionChapterCount,
                    questionTextGroup[questionChapter][questionChapterCount][0],
                    questionTextGroup[questionChapter][questionChapterCount][1],
                    questionTextGroup[questionChapter][questionChapterCount][2],
                    questionTextGroup[questionChapter][questionChapterCount][3],
                    0,
                    0,
                    -1
                ]
            );
        }
        qustionCountOver = qustionCountOver - questionChapterRand;
    }
}

function questionDisplaySet() {
    document.getElementById('questionHeaderLine').innerText =
        "問題" + questionCounts + "：" + questions[questionCounts - 1][2];
    document.getElementById('qustionText').innerText =
        questions[questionCounts - 1][3];
    
    choiceCount = questions[questionCounts - 1][4].split(',').length;
    let choice = questions[questionCounts - 1][4].split(',');
    let qustionChoice = document.getElementById('qustionChoice');
    qustionChoice.innerHTML = '';

    for (let i = 0; i < choiceCount; i++) {
        qustionChoice.innerHTML = 
            qustionChoice.innerHTML +
            '<li><label><input type="radio" name="choice" value="' + choice[i] + '" ' + (questions[questionCounts - 1][8] === i ? 'checked' : "") + '>' + choice[i] + '</label></li>';
        
    }
}

function getChoiceSelect() {
    let choiceSelect = document.getElementsByName('choice');
    let choiceSelectNum = -1;
    for (let i = 0; i < choiceCount; i++) {
        if (choiceSelect[i].checked) {
            choiceSelectNum = i;
            return choiceSelectNum;
        }
    }

    return -1;
}

function prevButtonClick() {
    let choiceNum = getChoiceSelect();
    questions[questionCounts - 1][8] = choiceNum;

    questionCounts--;
    if (questionCounts <= 0) {
        questionCounts = questionCount;
    }
    questionDisplaySet();
}

function nextButtonClick() {
    let choiceNum = getChoiceSelect();
    questions[questionCounts - 1][8] = choiceNum;

    questionCounts++;
    if (questionCounts > questionCount) {
        let ans = confirm('結果を表示しますか？');
        if (ans) {
            let hrefText = 'result.html?d=' + questionCount;
            for (let i = 0; i < questionCount; i++) {
                hrefText = hrefText + 
                '&q' + i + '=' + 
                questions[i][0] + '-' +
                questions[i][1] + '-' +
                questions[i][7] + questions[i][8];
            }


            window.location.href = hrefText;
        }
        else {
            questionCounts = 1;
        }
    }
    questionDisplaySet();
}

function hintButtonClick() {
    alert(
        '答え：' + questions[questionCounts - 1][5]
    );
    questions[questionCounts - 1][7] = 1;
}