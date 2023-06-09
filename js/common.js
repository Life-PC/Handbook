const questionTextGroup = [
    [
        ["第1章", "全求協は、何を目的とする公益法人か", "求人情報の利用度の向上,求人メディア業界の活性化,求人情報の適正化の推進", "求人情報の適正化の推進"],
        ["第1章", "全求協は、設立とともに「求人広告のための（●●●●）」を定めた", "販売促進に関する業界ルール,倫理網領と掲載基準,広告掲載価格協定", "倫理網領と掲載基準"],
        ["第1章", "全求協の定めるミッションステイトメントは、全求協の目指すべき道を再確認するとともに、広く社会一般にも理解してもらえるよう、内外に宣言するものである", "○,×", "○"],
        ["第1章", "アクションステイトメント BASIC8とは、全求協の会員に属する求人広告営業や制作などに関わる者が、個人としての（●●●●）を社会に声明するものである", "行動規範や職業倫理,目標達成や成果をあげるための行動プラン,ミスを起こさないための教訓", "行動規範や職業倫理"],
        ["第1章", "全求協で行っていないものはどれか", "求人広告適正化事業,求人メディアの発行,調査研究", "求人メディアの発行"],
        ["第1章", "全求協は厚生労働省の後援のもと、障がい者雇用支援を推進している", "○,×", "○"],
        ["第1章", "トラブルの多い友人広告の掲載することや、不明確な広告内容を記載することは、読者・ユーザーの不振を招くばかりでなく、社会的な信用を失い、広告主を失うことにもなり、メディアの存在すら脅かすことになる", "○,×", "○"],
        ["第1章", "全求協の掲載基準で、掲載明示項目となっているものはどれか", "昇給・賞与,雇用期間の定めの有無がわかること,資本金の額", "雇用期間の定めの有無がわかること"],
        ["第1章", "全求協の掲載基準で、掲載明示項目となっているものはどれか", "勤務時間,有給休暇,夏季・年末年始休暇", "勤務時間"],
        ["第1章", "全求協の掲載基準において、賃金は例示を表記すればよいことになっている", "○,×", "×"]
    ],
    [
        ["第2章", "労働力調査により把握することができる指標に「完全失業率」があるが、完全失業率は景気の後退期には低下する傾向にある", "○,×", "×"],
        ["第2章", "国勢調査によると少子高齢化とそれに伴う人手不足感の高まりが懸念されている", "○,×", "○"],
        ["第2章", "求人倍率とは求人1件につき求職者が何人いるかの倍率を表したものである", "○,×", "×"],
        ["第2章", "新卒学生の求人倍率は、大手企業で低く、中小企業で高い", "○,×", "○"],
        ["第2章", "2024年3月卒の大学生の就職活動は、情報提供や会社説明会は3年生の3月開始、選考は4年生の6月開始というスケジュールとなっている", "○,×", "○"],
        ["第2章", "業務委託であっても、仕事をしている以上は労働基準法が適用される", "○,×", "×"],
        ["第2章", "業務委託契約は独立した事業主としての契約なので、相手方である募集企業から指揮命令を受けることはない", "○,×", "○"],
        ["第2章", "業務委託契約の場合、社会保険は一般的には適用されない", "○,×", "○"],
        ["第2章", "雇用動向調査で仕事に就く際にもっとも利用されているのはどれか", "ハローワーク,縁故,求人広告", "求人広告"],
        ["第2章", "求人メディアの全求協をはじめ、人材紹介、人材派遣、請負・製造派遣の団体が連携して設立した団体の名称はどれか", "労働市場サービス協会,人材サービス産業協会,日本人材ビジネス協会", "人材サービス産業協会"],
        ["第2章", "時間外労働・休日労働に関する労使協定の届出は次のうちどこへ届ける必要があるか", "労働局,ハローワーク,労働基準監督署長", "労働基準監督署長"],
        ["第2章", "「募集情報等提供事業者」とはサイト情報 誌などにより求人・求職の情報を提供する事業者のことをいう", "○,×", "○"],

        ["第2章", "労働者の募集に関する情報を収集して提供すあるクローリング型の求人メディアは、募集情報等提供事業者には当たらない", "○,×", "×"],
        ["第2章", "募集情報等提供事業者のうち、（●●●●）場合は厚生労働大臣への届出が必要である", "取扱求人情報数が一定数を超える,求人情報を編集する,労働者になろうとする者の情報を収集する", "労働者になろうとする者の情報を収集する"],
        ["第2章", "求人情報の的確表示は募集主となる求人企業 が守るべき義務であり、求人メディアなどの募集情報等提供事業者には義務は課されていない", "○,×", "×"],
        ["第2章", "募集情報等提供事業者は、募集に応じた労働者から、その募集に関して、労働者が承諾すれば別途定める報酬を受け取ることができる", "○,×", "×"],
        ["第2章", "募集情報等提供事業者は労働争議に対する中立の立場を維持するため、 ストライキ又はロックアウトの行われている事業所に関する募集情報の提供を行ってはならない", "○,×", "○"],
        ["第2章", "労働局は特定募集情報等提供事業者に対し、必要に応じ、事業停止命令を行うことができる", "○,×", "○"],
        ["第2章", "（●●●●）とは、求人及び求職の申し込みを受けて求人者 （企業）と求職者の間における雇用関係の成立を斡旋することをいう", "職業紹介,労働者派遣,業務請負", "職業紹介"],
        ["第2章", "請負契約により行われる事業であったとしても、請負発注者と請負受注者の労働者との間に指揮命令関係がある場合には労働者派遣事 業に該当し、労働者派遣法の適用を受けることがある", "○,×", "○"],
        ["第2章", "労働組合は、厚生労働大臣の許可を受けて無料の労働者供給事業を行うことができる", "○,×", "○,×"],
        ["第2章", "次のうち有料職業紹介で紹介できるのはどれか", "建設業務,港湾運送業務,警備業務", "警備業務"],

        ["第2章", "有料職業紹介は、原則として求職者から手数料を徴収できない", "○,×", "○"],
        ["第2章", "職業紹介事業者は、全ての求人を受理しなければならないが、法令に違反するなどの求人は受理しないことができる", "○,×", "○"],
        ["第2章", "有料職業紹介は許可が必要だが、無料であれば自由に行うことができる", "○,×", "×"],
        ["第2章", "すべての労働者派遣事業は許可制である", "○,×", "○"],
        ["第2章", "次の内、 派遣が禁止されている業務はどれか", "へき地における病院関係の医療業務,港湾倉庫内で仕分け作業,施工管理の業務", "港湾倉庫内で仕分け作業"],
        ["第2章", "派遣労働者には受け入れ期間の制限があり、同一の労働者を同一の組織単位で派遣として受け入れることができる期間は3年である", "○,×", "○"],
        ["第2章", "無期雇用される派遣労働者については、例外として派遣可能期間の制限がない", "○,×", "○"],
        ["第2章", "雇用期間が30日以内の日雇派遣は原則禁止となっている", "○,×", "○"],
        ["第2章", "紹介予定派遣事業を行うことができるのはどれか", "派遣事業で3年以上の営業実績がある場合,職業紹介事業の許可を得ている場合,職業紹介事業と派遣事業の許可がある場合", "職業紹介事業と派遣事業の許可がある場合"],
        ["第2章", "紹介予定派遣の場合、派遣できる期間の上限はどれか", "3ヵ月,6ヵ月,1年", "6ヵ月"],
        ["第2章", "36協定の締結などの責任は派遣元が持つが、 時間外労働の管理は実際に指揮命令を行う派還先の責任となる", "○,×", "○"],

        ["第2章", "男女雇用機会均等法による性差別の禁止や労働施策総合推進法による年齢制限の禁止は、労働者を募集・採用する際の差別を禁止したものであり、派遣事業所は派遣労働者を募集・採用するわけではないので、これらの法律は適用されない", "○,×", "×"],
        ["第2章", "日雇派遣として例外的に認められる対象者は、①世帯収入が500万円以上で主たる生 計者でない人、②雇用保険の適用を受けない 学生③生業収入が500万円以上で副業と して日雇派遣に従事する人、ともう1つ次のうちどれか", "50歳以上の人,60歳未満の人,60歳以上の人", "60歳以上の人"],
        ["第2章", "派遣労働者に対しての不合理な待遇差をなくすための措置が義務化されている", "○,×", "○"],
        ["第2章", "業務請負業の労働者の場合、指揮命令は現場の請負先から受ける", "○,×", "×"],
        ["第2章", "一人請負派遣とは労働者と業務委託契約を結び、その労働者を別のB社に送り込み、B社の指揮命令下で働かせるケースをいう。業務委託契約を結んでいるが、実態としてB社から指揮命令を受けており、労働者供給事業の禁止に抵触する", "○,×", "○"],
        ["第2章", "業務請負業の労働者が、請負先から直接指揮命令を受けている状態は、「偽装請負」となり違法である", "○,×", "○"],
        ["第2章", "第三者に募集を委託する場合は、許可や届出が必要であるが、募集受託先が職業紹介業の許可を持っている場合は改めて許可や届出をする必要はない", "○,×", "○"],
        ["第2章", "フランチャイズチェーンの本部が採用窓口となって、各店舗の従業員を一括して募集・選考を行い、各店舗 (法人)と雇用契約させ配属することは許可や届出が必要なく、自由にできる", "○,×", "×"]
    ],
    [
        ["第3章", "職業選択の自由は、日本国憲法 によって保障されている", "○,×", "○"],
        ["第3章", "（●●●●）では、人種、国籍、信条、 性別、社会的身分、労働 組合員であること等を理由として、差別的な扱いをしてはならないとしている。", "職業安定法,労働契約法,男女雇用機会均等法", "職業安定法"],
        ["第3章", "求職者には職業選択の自由が保障されている求人事業主には労働者を選択する自由は認められていない", "○,×", "×"],
        ["第3章", "労働条件の明示は労働基準法以外にも、職業安定法、労働契約法、パートタイム有期雇用労働法で規定されている", "○,×", "○"],
        ["第3章", "労働基準法では 「労働契約の締結に際し、労働者に対して、 賃金、 労働時間その他の労働条件を明示しなければならない」と定めており、また、 労働契約法では 「労働契約の内容 について、できる限り書面により確認するものとする」 と定めている", "○,×", "○"],
        ["第3章", "求人情報適正化推進協議会が設定した「求人情報提供ガイドライン』 では、求人広告において最低限明示すべき労働条件を定めている", "○,×", "○"],
        ["第3章", "使用者は、労働基準法によって労働契約を締結する際に、労働者に対して労働条件を明示しなければならないが、次の中で定めがなければ明示する必要のない事項はどれか", "就業の場所に関する事項,労働契約の期間に関する事項,賞与に関する事項", "賞与に関する事項"],
        ["第3章", "使用者は、労働基準法によって労働契約を結ぶ際に、正社員の場合は契約期間に定めがない場合明示する必要はない", "○,×", "×"],
        ["第3章", "パートタイム労働者に対しては、 労働基準法で定められた労働条件の明示に加え、 昇給・賞与・退職金の有無・相談窓口についても文書で明示しなければならない", "○,×", "○"],

        ["第3章", "常時10人以上の従業員がいる事業場では、 全員アルバイトで正社員は一人もいないので 就業規則を作成する必要はない", "○,×", "×"],
        ["第3章", "就業規則は、原則としてパートタイマーやアルバイトも含む職場の全ての労働者に適用される", "○,×", "○"],
        ["第3章", "常時10人以上の労働者がいる事業場では、作成・変更した就業規則は、その事業場の労 働者の （●●●●） で組織する労働組合 （そのような労働組合がない場合は労働者の（●●●●）を代表する者の意見をま とめた書類と共に労働基準監督署に提出しな ければならない", "過半数,3分の2,4分の3", "過半数"],
        ["第3章", "就業規則に記載する項目は労働基準法で定め られている", "○,×", "○"],
        ["第3章", "就業規則は会社の大切な情報になるので、鍵のついた書庫にしまい、 従業員であっても簡単に見られないように保管する必要がある", "○,×", "×"],
        ["第3章", "労働契約法の主な目的は次のうちどれか", "労使時の交渉力の格差是正,同僚間トラブルの未然防止,労使紛争の増大", "労使時の交渉力の格差是正"],
        ["第3章", "労働契約法では 「労働契約は、 労働者と使用 者が 「労働すること」 「賃金を支払うこと」 について（●●●●）と成立する」 としてい る", "合意する,確認する,書面を交付する", "合意する"],
        ["第3章", "3回以上の契約更新や1年を超えて継続雇用を行った労働者の契約を更新しない場合は、契約満了の30日前までに雇止めの予告をしなければならない", "○,×", "○"],
        ["第3章", "使用者は、有期労働契約を結ぶ者に対し本人 の希望を聞いたうえで無期雇用への転換など を含め契約期間をできる限り長くするよう努めなければならない", "○,×", "○"],

        ["第3章", "「同一労働同一賃金」の対象は大企業のみである", "○,×", "×"],
        ["第3章", "同一労働同一賃金は不合理な賃金差別を禁止したもので、社員食堂などの福利厚生は対象とはならない", "○,×", "×"],
        ["第3章", "就業規則とは別に個別に労働者と契約を結んだ場合、法律に触れない内容であれば、どんな内容でも個別労働契約が優先される", "○,×", "×"],
        ["第3章", "有期労働契約において雇用期間の上限は、特例の場合を除き、労働基準法第14条で（●●●●）年以内と定められている", "1,2,3", "3"],
        ["第3章", "厚生労働大臣が定める基準に該当する専門的知識、技術・経験を有する労働者は、5年までの有期労働契約を結ぶことができる", "○,×", "○"],
        ["第3章", "他の求人と差別化するため、 今回募集する パートスタッフとは10年間の労働契約を締結したい、と広告主から相談された。 長く働けることは労働者にとってもメリットになる ので是非ともそうするよう勧めた", "○,×", "×"],
        ["第3章", "試用期間を設ける場合は、就業規則または労働契約書に明確に盛り込む必要がある", "○,×", "○"],
        ["第3章", "試用期間と本採用が一つの労働契約である場でも、試用期間中の労働条件が仮に本採用後と異なっていたら、それぞれの労働条件を明示しなければならない", "○,×", "○"],
        ["第3章", "試用期間中に解雇する場合であっても、本採用と同様に解雇には正当な理由が必要だ", "○,×", "○"],
        ["第3章", "入社前、仕事を良く知ってもらいたいため、 実務研修を行った。 採用前なので賃金を支払う必要はない", "○,×", "×"],

        ["第3章", "研修期間中は、社会保険に加入させなくてもかまわない。", "○,×", "×"],
        ["第3章", "労働契約法により無期雇用に転換できるのは、有期労働契約が反復更新して通算何年超の場合か", "3年超,5年超,10年越", "5年超"],
        ["第3章", "労働契約法により有期労働契約が無期雇用に転換されることの説明として正しいのは次のうちどれか", "一定以上の雇用期間があれば強制的に転換される,一定以上の雇用期間があれば労働者が使用者に申し出することによって転換される,一定以上の雇用期間があれば労働者と使用者が合意すれば転換される", "一定以上の雇用期間があれば労働者が使用者に申し出することによって転換される"],
        ["第3章", "労働契約法により有期労働契約を通算して一定期間を超えれば無期雇用に転換されるが、その間に労働契約を結んでいない空白期間があれば通算されずリセットされる。その期間とは次のうちどれか", "3ヵ月以上,6ヵ月以上,1年", "6ヵ月以上"],
        ["第3章", "有期雇用特別措置法によって「無期雇用転換ルール」の特例に該当するのはどれか", "若年者,部長等管理署監督者の地位にあるもの,定年後引き続き雇用されるもの", "定年後引き続き雇用されるもの"],
        ["第3章", "労働者協同組合法で組合員には出資の必要がある。出資一口の金額は個人で好きな金額を決められる", "○,×", "×"],
        ["第3章", "労働者協同組合は、多様な働き方を実現化した組織のため、組合と組合員との間で労働契約を結ぶ必要はない", "○,×", "×"],
        ["第3章", "労働者協同組合で事業を行うには、（●●●●）が必要である", "都道府県知事に提出,都道府県労働局の認定,厚生労働省の許可", "都道府県知事に提出"],
        ["第3章", "予め募集要項等で示していた労働条件を、面接結果等により変更することにした場合、その変更内容について可能な限り速やかに明示しなければならない", "○,×", "○"],

        ["第3章", "応募書類として適切なものはどれか", "職務経歴書,住民票,家族構成の記載のあるエントリーシート", "職務経歴書"],
        ["第3章", "応募フォームに設けるのに相応しくない項目はどれか", "本籍地,卒論テーマ,在学中のアルバイト歴", "本籍地"],
        ["第3章", "不採用者には納得してもらうため、採否結果には不採用理由を必ず明記しなければならない", "○,×", "×"],
        ["第3章", "採用時であれば、誓約書身元保証契約書などの提出を求めてもよい", "○,×", "○"],
        ["第3章", "戸籍謄本と戸籍抄本は、応募書類として提出を求めることは問題があるが、入社時に提出を求めることは問題ない。", "○,×", "×"],
        ["第3章", "採用時に配偶者控除等申告書や家族届けなどの提出を求めても問題ないが、応募面接時に家族の状況などを質問することは問題だ", "○,×", "○"],
        ["第3章", "応募者のクレーム対応力を見るためならば、わざと横柄な態度で答えにくい質問をしてもよい", "○,×", "×"],
        ["第3章", "本人を知るためには、本人が育った家庭環境について詳しく聞くのが一番なので、両親のことや家庭環境のことを中心に面接を進めることにしている", "○,×", "×"],
        ["第3章", "調理職募集の際、衛生面での理由から、応募資格で「男性長髪不可」とするのは男女差別とならず許される", "○,×", "×"],
        ["第3章", "イベントコンパニオンの募集だったので、女性のみの募集とした", "○,×", "×"],
        ["第3章", "男性が優遇されるのは問題だが、女性が優遇されるのであれば、男女雇用機会均等法の趣旨に反しない", "○,×", "×"],

        ["第3章", "「男性10名・女性10名」の募集をしたいと希望された。男女間に全く差がみられないので問題ないと判断して求人広告にそのまま掲載した", "○,×", "×"],
        ["第3章", "女性トイレをふくむ清掃の募集は、女性のみの募集をすることができる", "○,×", "×"],
        ["第3章", "男性労働者との事実上の格差を解消するために、女性を優先的に取り扱う積極的取組は、男女雇用機会均等法に違反しないとされた。このことをなんというか", "ポジティブ・アクション,ネガティブ・リスト,ポジティブ・リスト", "ポジティブ・アクション"],
        ["第3章", "ポジティブ・アクションが適用されるのは、雇用管理区分の職場において女性の割合が4割を下回っている場合のみであり、役職ごとの女性の割合が4割を下回っている場合は対象とならない", "○,×", "×"],
        ["第3章", "募集・採用に当たり、合理的な理由なく一定の身長、体重または体力を要件とすることは、男女雇用機会均等法の「間接差別」に該当するので認められない", "○,×", "○"],
        ["第3章", "バイタリティにあふれる営業が欲しいとのことだったので、「体力に自信のある方」というコピーを提案した", "○,×", "×"],
        ["第3章", "男女雇用機会均等法で、外見上は性に中立的に見えても、実質的には性差別につながっていることを何というか", "間接差別,中性差別,実質差別", "間接差別"],
        ["第3章", "男女雇用機会均等法で、業務遂行上必要でない場合、労働者の募集、採用、昇進、職種の変更に当たって、転居を伴う転勤に応じることができることを要件にできない", "○,×", "○"],
        ["第3章", "企業のセクハラ対策については、男性やいわゆるLGBTなどの性的少数者に対しての対策も講じることが義務付けられている", "○,×", "○"],

        ["第3章", "男女雇用機会均等法では、事業主である企業が過科に処せられることはない", "○,×", "×"],
        ["第3章", "期間の定めはあるが更新をくりかえすパートタイマー募集で、経験不問の場合は年制限の例外事由3号のイにおける「期間の定めのない労働契約」にあてはまるため、年齢制限ができる", "○,×", "×"],
        ["第3章", "有期雇用のアルバイトの雇止め年齢を60歳の規定が就業規則に定められている場合は、60歳未満に限定したアルバイトの募集ができる", "○,×", "×"],
        ["第3章", "取扱いブランドを使用して販売する店員の募集は、施策総合推進法の定める例外事由「芸術・芸能の分野における表現の真実等の要請がある場合」に該当するため、年齢制限ができる", "○,×", "×"],
        ["第3章", "長期勤続によるキャリア形成を図る観点から若年者等を募集・採用する場合、「35歳未満の方を募集（職務経験2年以上）」と表記できる", "○,×", "×"],
        ["第3章", "事業主から「重い荷物を運ぶので若い人が欲「しい」と言われたが、「年齢より個人の能力で判断を」と勧め、広告には年齢を書かずに具体的な仕事内容を表記した", "○,×", "○"],
        ["第3章", "年齢制限を行うのではなく、業務の内容や業務の遂行に必要な適性や能力・経験などを明示して人材募集を行うことが求められている", "○,×", "○"],
        ["第3章", "内定取消しは、勤務開始前であっても解雇と同様にみなされることがある", "○,×", "○"],
        ["第3章", "履歴書詐称など提出書類に重大な嘘がある場合は、内定取消しが認められる", "○,×", "○"],
    ],
    [
        ["第4章", "給与額を聞いたところ「だいたい手取りで20万円くらいかな?」と言われたので「月給20万円くらい」と表記した", "○,×", "×"],
        ["第4章", "虚偽の労働条件を提示して労働者の募集をおこなった場合、職業安定法違反となるが、その罰則は次のうちどれか", "2ヵ月以下の懲役又は10万円以下の罰金,6ヵ月以下の懲役又は30万円いかの罰金,40万円以下の罰金", "6ヵ月以下の懲役又は30万円いかの罰金"],
        ["第4章", "「給与は固定給20万円＋歩合だが、今いる社員は全員40万円超えているので、給与表示を月給40万円と表示したい」と言われ、そのまま表記した", "○,×", "×"],
        ["第4章", "給与額を確認したところ「月給20万円」と言われたので、含まれている手当がないか、今回採用者の誰もがもらえる金額か確認した", "○,×", "○"],
        ["第4章", "職種名が一般的に馴染みのないものでも、業界で通用する言葉であれば応募者はわかっているはずなので、そのまま表記してもかまわない", "○,×", "×"],
        ["第4章", "タクシー乗務員の職種表現として不適切なものはどれか", "タクシードライバー,タクシー運転手,タクシーサービスアテンダント", "タクシーサービスアテンダント"],
        ["第4章", "Excelの関数が使える人が欲しいということだったので、応募資格を「Excel経験者」とした。", "○,×", "×"],
        ["第4章", "固定残業代を含んだ給与だったので、月給25万円以上※固定残業代（3万8千円）含む、超過分は別途支給と表記した。", "○,×", "×"],
        ["第4章", "接客業のためお客様との会話が必要なので「日本人の方」と表記した", "○,×", "×"],
        ["第4章", "次のうち、採用条件として不適切なものはどれか", "学歴,性格,経験", "性格"],

        ["第4章", "接客業なので、「明るい方歓迎」と表記した", "○,×", "×"],
        ["第4章", "通常の業務で自動車を運転することはないが、普通自動車免許を持っていれば何かと便利なので、必須の応募資格とした", "○,×", "×"],
        ["第4章", "グループ会社間の人事交流のための出向は、就業規則に定めがあり、出向命令が濫用によあるものでなければ特に問題とはみなされない", "○,×", "○"],
        ["第4章", "出向については、事業性のあるものは労働者供給業や職業紹介とみなされるため注意が必要である", "○,×", "○"],
        ["第4章", "労働基準法では、年少者とは（●●●●）歳末満をいう。深夜業や時間外労働などの制限がある", "15,18,20", "18"],
        ["第4章", "新規高校卒業者の募集の受付は、学校または公共職業安定所を通じて行う", "○,×", "○"],
        ["第4章", "常用労働者数が43.5人以上の民間一般企業における障がい者の法定雇用率は（●●●●）%である", "1.5,1.8,2.3", "2.3"],
        ["第4章", "精神障がい者も実雇用率の算定対象に入っている", "○,×", "○"],
        ["第4章", "障がい者を募集するときは、障がいの種類を限定することはできない。", "○,×", "○"],
        ["第4章", "週所定労働時間20時間未満の障がい者の短時間労働者も、実雇用率の算定対象としてカウントされる", "○,×", "×"],
        ["第4章", "留学生や就学生は、「資格外活動」の許可を得ていればアルバイトができるが、（●●●●）の事業所では就労ができない", "風俗営業,警備業,製造業", "風俗営業"],

        ["第4章", "労働施策総合推進法により、外国人を雇用すある場合は（●●●●）が必要である", "入国管理局への届出,労働基準監督署への届出,ハローワークへの届出", "ハローワークへの届出"],
        ["第4章", "在留資格「特定技能」のうち、特定技能2号の受け入れが可能な業種で含まれていないものはつぎのどれか", "外食業,建設業,造船・船用工業", "外食業"],
        ["第4章", "入社後の研修費用で5万円かかるので、すぐに辞められると会社にとって損害のため「1年以内にやめた場合、損害賠償金5万円を支払う。」という誓約書をとることは問題ない", "○,×", "×"],
        ["第4章", "故意または重大な過失によって会社に損害を与えた場合、損害を補償することを約束させることはできるが、具体的な損害額を事前に決めることはできない", "○,×", "○"],
        ["第4章", "身元保証契約は法律上締結の義務はなく、従って保証人の責任の範囲について定めた法律もない", "○,×", "×"]
    ],
    [
        ["第5章", "事業内容の確認にあたり、直近の取引に関係していない事業についても確認しておいた方がよい", "○,×", "○"],
        ["第5章", "事業を行うにあたり古物商の許可が必要な業種はどれか", "ちり紙交換,遺品引取り,出張買取", "出張買取"],
        ["第5章", "ゲームセンターの運営を行うにあたり必要な許可はどれか", "深夜酒類提供飲食店営業,風俗営業,特定遊興飲食店", "風俗営業"],
        ["第5章", "軽トラックによる運送事業を行うにあたり必要な届出は次のどれか", "特定貨物自動運送事業,貨物軽自動車運送事業,届出の必要はない", "貨物軽自動車運送事業"],
        ["第5章", "食事手当が支給されるとの申告があったので、採用された全員が入社後からすぐに確実にもらえる手当なのかを確認のうえ求人原稿に記載した", "○,×", "○"],
        ["第5章", "取引を開始するにあたり、求人広告を掲載すある場合、当該求人の募集内容について責任を負うのは事業者となることを説明した", "○,×", "○"],
        ["第5章", "求人広告に記載する募集内容は、採用された全員が、（●●●●）から確実に適用・提供される内容であること", "入社直後,研修期間終了後,試用期間終了後", "入社直後"],
        ["第5章", "掲載内容に事実と異なる記載があることが掲載後に発覚した場合は、掲載内容の修正や差し止めに応じる必要があることを広告主に説明し、了解してもらった", "○,×", "○"],
        ["第5章", "広告受注時に提出された書類と実際の住所が一致していなかったが、社名、電話番号、事業内容の3点が一致しているので問題ない", "○,×", "×"],
        ["第5章", "新規の掲載申込があった際、他の求人メディアに掲載されている同じ事業者の求人広告についても確認した方がよい", "○,×", "○"],

        ["第5章", "アルバイト等の雇用形態については、ごく一般的な用語ではあるが、会社によっては一般的には使われない用法を用いることがあるので注意が必要だ", "○,×", "○"],
        ["第5章", "掲載実績がある企業から再度掲載依頼があった時、前回と同じ内容と言われた場合は特に実態の確認をする必要はない", "○,×", "×"],
        ["第5章", "事業主のところに直接訪問することは、実態確認の最も確実な手段となる", "○,×", "○"],
        ["第5章", "広告主のオフィスに訪問したところ、事前に聞いていた社名と異なる看板がついていたが、もらった名刺の社名は聞いていた社名と同じだったので上長には報告しなかった", "○,×", "×"],
        ["第5章", "50人のオペレーターがいるコールセンターでの求人募集と言われたのでコールセンターがあるという現地を訪問したが、ワンルームマンションで事業の実態が確認できなかった為、掲載を保留とした", "○,×", "○"],
        ["第5章", "求人広告の掲載に際して、「○○の書類を確認しなければならない』といった法律上の縛りはない", "○,×", "○"],
        ["第5章", "事業内容や募集内容の確認のために事業主から提出していただく書類については、全求協の『掲載基準』によって定められている。", "○,×", "×"],
        ["第5章", "社会保険が法定通り適用されていないが、多くの会社が同様の状態なので掲載することにした", "○,×", "×"],
        ["第5章", "「（●●●●）や（●●●●）が行われている事業所、または行われるおそれが強いと都道府県労働委員会からハローワークへ通報され事業所の募集は掲載できない」。（●●●●）に当てはめるのに適当ではない文言はつぎのどれか", "ストライキ,ロックアウト,街頭デモ", "街頭デモ"],

        ["第5章", "各求人メディアが、独自の編集方針によって、掲載できない内容を定めるのは適当ではない", "○,×", "×"],
        ["第5章", "掲載不可になることが決まったら、掲載不可になった具体的な理由を事業主には必ず説明しなければならない", "○,×", "×"],
        ["第5章", "自社の営業が、審査の結果掲載不可となった事業主に判断を下したところとして伝える際に、適当なものは次のうちのどれか", "自社の審査部門,全求協,自社求人メディア", "自社求人メディア"],
        ["第5章", "掲載不可であることを伝えたところ、「他のメディアでは掲載してくれた」と反論された。その場合の対応として適当でないのは次のうちのどれか", "自社規制、編集方針上の基準に基づく独自判断であることを説明する,取引を行うかは、お互いの合意があって成立するものであることを説明する,全求協で取り決められているのでできないことを説明する", "全求協で取り決められているのでできないことを説明する"],
        ["第5章", "法令違反していることが明らかになった場合、その違反が改善されるまでは掲載を控えるべきである", "○,×", "○"],
        ["第5章", "貸金業者から掲載依頼があったが、連絡先が携帯しかないと言われたので掲載はお断りした", "○,×", "○"],
        ["第5章", "貸金業者から掲載依頼があったので、都道府県の貸金業登録と貸金業協会へ加盟を確認した", "○,×", "○"],
        ["第5章", "メンズエステの求人依頼があったので、該当店舗のサイトを確認したところ、「当店は性風俗ではありません」と明記されていたので、それ以上確認をしなかった", "○,×", "×"],
        ["第5章", "無届の性風俗関連特殊営業の実態確認方法として、適当でないものは次のうちのどれか", "許可証の確認,口コミサイトのチェック,抜き打ち訪問", "許可証の確認"],

        ["第5章", "「インターネット関連事業」を特に注意すべき業種・業態として取り上げている理由の中で、最も適当な内容は次のうちのどれか", "残業時間が多いブラック企業が多いから,専門用語が多く、一般の人には理解しづらい内容が多いから,詐欺的な『情報商材の販売』や『アダルト関連サイト』、『出会い系サイト』をごまかして運営している可能性があるから", "詐欺的な『情報商材の販売』や『アダルト関連サイト』、『出会い系サイト』をごまかして運営している可能性があるから"],
        ["第5章", "ホームページの制作会社からデータ入力の求人の掲載依頼があった。どのようなホームページを制作しているのか、どのようなデータを入力する仕事か詳細があいまいだったた止め、確認できるまでは掲載を保留とした", "○,×", "○"],
        ["第5章", "不用品を無料で引き取る際に必要な許可は次のうちのどれか", "古物商,産業廃棄物処理業者,一般廃棄物処理業者", "一般廃棄物処理業者"],
        ["第5章", "遺品や不用品の買い取りと引き取りを行う場合に必要な許可は次のうちどれか", "一般廃棄物処理業者,古物商,古物商と一般廃棄物処理業者の両方", "古物商と一般廃棄物処理業者の両方"],
        ["第5章", "講師の募集だが、研修があるので未経験者歓迎となっている。念のため、費用負担の有無やスケジュール等、研修の詳細を確認した", "○,×", "○"],
        ["第5章", "軽貨物輸送の業務委託募集の掲載依頼があった時、特に注意すべき点は次のうちどれか", "運送料金が安すぎないか,勤務時間が長すぎないか,研修費、車輛代、登録料など、求職者に費用負担があるものは、金額を確認する", "研修費、車輛代、登録料など、求職者に費用負担があるものは、金額を確認する"]
    ],
    [
        ["第6章", "労働基準法において、賃金とは労働の対償として使用者が労働者に支払うものとされており、家族手当や役職手当は賃金には含まれない", "○,×", "×"],
        ["第6章", "賃金は労働に対する対価なので、働かない場合は賃金を支払わなくてもよい。これをノーワーク・ノーペイの原則という", "○,×", "○"],
        ["第6章", "賃金支払いの5原則のうちの一つとして、正しいのはどれか", "賃金を毎月第2金曜日に現金で支払う,賃金を毎月25日現金で80％、商品券で20％支払う,賃金を本人の銀行口座に毎月25日に支払う", "賃金を本人の銀行口座に毎月25日に支払う"],
        ["第6章", "賃金の毎月支払いの原則は、年俸制には適用されない", "○,×", "×"],
        ["第6章", "最低賃金制度において年少者は、最低賃金の減額の特例許可制度の対象となっているた止め、最低賃金より低く設定してもかまわない", "○,×", "×"],
        ["第6章", "本社が北海道にあるならば、店舗が東京でも北海道の最低賃金が採用される", "○,×", "×"],
        ["第6章", "派遣労働者には、派遣元の地域別最低賃金が適用される", "○,×", "×"],
        ["第6章", "休日労働として法律上の割増賃金を支払う義務が生じるのは、次のうちどの日に労働させした場合か", "法定休日,日曜日,使用者が定めた所定の休日", "法定休日"],
        ["第6章", "週休2日制(土日休み)で2日とも出勤した場合の休日出勤の割増賃金は、次のうちどこれか", "1日分のみでよい,2日分必要,2日間とも必要ない", "1日分のみでよい"],
        ["第6章", "1カ月に60時間を超える時間外労働の割増賃金率は、次のうちどれか", "25％以上,35％以上,50％以上", "50％以上"],

        ["第6章", "1カ月に60時間を超える時間外労働の場合、割増賃金率のうち25%分を休暇に代えて与える際に必要な手続きはどれか", "就業規則に記載,労使協定の締結,代表取締役の承認", "労使協定の締結"],
        ["第6章", "休日労働が午後10時から午前5時までの深夜時間帯に及んだ際には、休日労働の割増賃金35%に加え、深夜労働の25%の割増賃金の支払いが必要になる", "○,×", "○"],
        ["第6章", "22時から翌7時までの時間が決められた勤務(休憩1時間)ならば、深夜割増分を払う必要はない", "○,×", "×"],
        ["第6章", "使用者の責による休業の場合、休業手当の支払が義務づけられているが、休業手当の金額について正しいのはどれか", "平均賃金の50％の支払い,平均賃金の60％の支払い,平均賃金の100％の支払い", "平均賃金の60％の支払い"],
        ["第6章", "就業規則違反で出勤停止中の労働者に対してでも、その期間中は休業手当を支給しなければならない", "○,×", "×"],
        ["第6章", "産前産後休業・育児休業は法律で義務づけられているが、休業中の賃金について正しいのはどれか", "賃金支払義務はない,平均賃金の60％の支払い,平均賃金の100％の支払い", "賃金支払義務はない"],
        ["第6章", "遅刻・早退・欠勤により、労働をしなかった時間に相当する賃金を差し引くのも減給制裁にあたる", "○,×", "×"],
        ["第6章", "月給制の場合、法で定めている減給制裁額の上限について、正しいのはどれか", "1回の制裁金額が平均賃金1日分の半額以下であれば、総額の制限はない,制裁総額が当該月給の10％以下であれば、1回の制裁金額の制限はない,1回の制裁金額が平均賃金1日分の半額以下、制裁総額が当該月給の10％以下", "1回の制裁金額が平均賃金1日分の半額以下、制裁総額が当該月給の10％以下"],
        ["第6章", "平均賃金を算定する際、年2回の賞与は除外して計算した", "○,×", "○"]
    ],
    [
        ["第7章", "労働時間にあたらないものは、次のうちどれか", "労働者が休日に自発的に勉強する時間,ドライバーの待機時間,使用者が始業前に行う朝礼", "労働者が休日に自発的に勉強する時間"],
        ["第7章", "1日の法定労働時間は、何時間か", "7時間,8時間,10時間", "8時間"],
        ["第7章", "1週間の法定労働時間は、原則として何時間か", "40時間,44時間,46時間", "40時間"],
        ["第7章", "労働時間の特例措置の対象として週44時間の労働が認められているのは、どの事業か", "常時10人未満の労働者を使用する製造業,常時10人未満を労働者を使用する接客業、娯楽業,常時10人未満の労働者を使用する金融業", "常時10人未満を労働者を使用する接客業、娯楽業"],
        ["第7章", "労働終了時間が翌日(深夜0時以降)にまたがる場合、労働日は2日間としてカウントする", "○,×", "×"],
        ["第7章", "週40時間の、法定労働時間を遵守するためには、完全週休2日制にしなければならない", "○,×", "×"],
        ["第7章", "災害その他避けることのできない事由や公務そのための臨時の必要がある場合を除き、使用者が労働者に休日労働をさせるにはどうすればいいか", "使用者の随意,1週間前に予告が必要,労使協定を結ばなければならない", "労使協定を結ばなければならない"],
        ["第7章", "従業員に時間外や休日労働をさせる場合、割増賃金さえ支払えば、制限なくさせることができる", "○,×", "×"],
        ["第7章", "法定労働時間を超えて労働させたり、休日に労働させる場合は、「三六(サブロク)協定」と呼ばれる労使協定を締結する必要がある。この三六協定は労働基準監督署に届け出る必要はない", "○,×", "×"],
        ["第7章", "2019年4月1日の労働基準法改正により時間外労働の上限が1カ月で45時間、1年で360時間と定められたが、自動車運転手、建設業（●●●●）等は当面5年間は適用されない", "介護福祉士,看護師,医師", "医師"],

        ["第7章", "1カ月で45時間、1年で360時間を超えて時間外労働をさせる場合は、特別条項付き三六協定を結ぶ必要がある", "○,×", "○"],
        ["第7章", "臨時的な特別の事情がある場合に認められる残業時間の上限は、1年720時間以内かつ、休日労働との合計が1月（●●●●）かつ複数月平均80時間以内である", "100時間未満,100時間以内,110時間未満", "100時間未満"],
        ["第7章", "妊産婦が請求した場合、休日労働に従事させることは禁止されているが、時間外労働については禁止されていない", "○,×", "×"],
        ["第7章", "労働基準法における規定で、「深夜業」の時間帯とは何時から何時か", "22時から翌朝5時まで,22時から翌朝6時まで,23字から翌朝6時まで", "22時から翌朝5時まで"],
        ["第7章", "コンビニエンスストアで深夜勤務をさせてはいけないのは、次のうちどれか", "女性,18歳未満の年少者,女性と18歳未満の年少者", "18歳未満の年少者"],
        ["第7章", "労働基準監督署長の許可を得て15歳未満を労働させる場合、働かせてはいけない深夜時間帯とは何時から何時か", "18時から翌朝5時まで,20時から翌朝5時まで,22時から翌朝5時まで", "22時から翌朝5時まで"],
        ["第7章", "年少者(未成年者)の深夜労働禁止が除外されないのは、次のうちどれか", "交替制で働く満16以上の男性,交替制で働く満16歳以上の人,交替制の事業所で22時30分まで労働する人", "交替制で働く満16歳以上の人"],
        ["第7章", "変形労働時間制を導入する場合には、「労使「協定を締結する｣、｢就業規則に明記する」などの手続きが必要である", "○,×", "○"],
        ["第7章", "1カ月単位の変形労働時間制を導入予定だが、月内の繁忙度合いが予測できないため、1日の労働時間を1週間前までに決定するようにした", "○,×", "×"],
        ["第7章", "1年単位の変形労働時間制の場合、1日の労働時間の上限は何時間か", "10時間,12時間,14時間", "10時間"],

        ["第7章", "1年単位の変形労働時間制を利用して、3カ月変形労働時間制も可能である", "○,×", "○"],
        ["第7章", "業種・企業規模に関係なく、所定の手続きにより1週間単位の非定型的変形労働時間制を導入できる", "○,×", "×"],
        ["第7章", "フレックスタイム制で、労働者が労働すべき総労働時間を定める「精算期間」は1カ月以内でなければならない", "○,×", "×"],
        ["第7章", "労働者が労働時間の全部あるいは一部について事業場外で仕事をした場合、その労働時間が算出しがたいときに、所定労働時間分の労働をしたものとみなす制度をなんというか", "事業場外のみなし労働時間制,裁量労働のみなし労働時間制,指揮監督外のみなし労働時間制", "事業場外のみなし労働時間制"],
        ["第7章", "携帯電話等で就業終了を会社に連絡させるのは、事業場外みなし労働時間制とは認められない", "○,×", "○"],
        ["第7章", "みなし労働時間制をとっている場合、深夜や休日に勤務をしても、割増賃金を支払う必要はない", "○,×", "×"],
        ["第7章", "裁量労働のみなし労働時間制を適用する場合は、労働基準法の時間外労働・深夜労働・休日労働・休憩に関する規定は適用されない", "○,×", "×"],
        ["第7章", "裁量労働のみなし労働時間制には2つの形態があるが、その組み合わせとして正しいのは次のうちどれか", "取材業務型と研究業務型,専門業務型と企画業務型,開発業務型と管理業務型", "専門業務型と企画業務型"],
        ["第7章", "労働者の募集を行う際に、裁量労働制による「みなし労働時間」が適用されている場合はその旨を明示しなければならない", "○,×", "○"],
        ["第7章", "高度プロフェッショナル制度では休日についての規制がないので、1カ月間休日がなくても問題ない", "○,×", "×"]
    ],
    [
        ["第8章", "1日の労働時間が6時間を超え、8時間以内の場合に、与えなければならない休憩時間の長さは、次のうちどれか", "30分,45分,60分", "45分"],
        ["第8章", "荷積みのために配送ドライバーが待っている時間は、労働をしていないので休憩時間となる", "○,×", "×"],
        ["第8章", "休憩は2~3回に分けて与えても問題はない", "○,×", "○"],
        ["第8章", "法定休日とは、日曜日と祝日のことである", "○,×", "×"],
        ["第8章", "原則として、休日は毎週少なくとも1日与えなければならない", "○,×", "○"],
        ["第8章", "休日は、1週間のうちの曜日を決めて与えなければならない", "○,×", "×"],
        ["第8章", "代休と振替休日のうち、休日労働の割増賃金が必要なのはどちらか", "代休,振替休日,どちらも必要", "代休"],
        ["第8章", "休日労働などを行わせた場合でも、その代替措置として代休を与えなければならないという法律上の義務はない", "○,×", "○"],
        ["第8章", "入社1年目のフルタイム労働者が年次有給休暇の取得資格を得た場合、与えなければいけない年次有給休暇の日数は、次のうちどれか", "8日,10日,12日", "10日"],
        ["第8章", "入社後、法に定める年次有給休暇が付与されるまでの継続勤務期間は、次のうちどれか", "6ヵ月,8ヵ月,1年", "6ヵ月"],
        ["第8章", "労働者が年次有給休暇の取得資格を得るためには、所定労働日数に対して最低何割出勤しなければならないか", "7割,8割,9割", "8割"],
        ["第8章", "週1日勤務のパートタイマーには、有給休暇は発生しない", "○,×", "×"],

        ["第8章", "所定労働時間が週30時間以上であるパートタイマーの有給休暇付与日数は正社員と同じである", "○,×", "○"],
        ["第8章", "使用者は、労働者から有給休暇の申請を受けた場合でも、事業の正常な運営を妨げる場合には有給取得日を変更することができる", "○,×", "○"],
        ["第8章", "女性が出産時に取得できる休業は、次のどれか", "出産休業,妊娠休業,産前産後休業", "産前産後休業"],
        ["第8章", "妊娠・出産等を理由として就業環境を害する行為(マタニティハラスメント)を防止する措置をとることは、使用者に法律上義務付けられている", "○,×", "○"],
        ["第8章", "2021年の育児・介護休業法の改正は男性の育休取得を促進することも目的としている", "○,×", "○"],
        ["第8章", "家族の介護を目的とした休業制度は、次のどれか", "高齢者休業制度,介護休業制度,看護休業制度", "介護休業制度"],
        ["第8章", "労働者と同居していない祖父母は、介護休業法の対象家族とはならない", "○,×", "×"],
        ["第8章", "次の休暇（休業）の中で、法律で保障されていない休暇（休業）はどれか", "介護休業,育児休業,慶弔休暇", "慶弔休暇"],
        ["第8章", "労働者が裁判員として会社を休む際は、使用者は必ず有給休暇扱いにしなければならない", "○,×", "×"],
        ["第8章", "労働基準法によれば、「監督若しくは管理の地位にある者については、労働時間、休憩及び休日に関する規定は適用しない。」とされている", "○,×", "○"],
        ["第8章", "パート・アルバイトの採用解雇の権限がない等の場合でも、小売店の店長であれば職場の「管理監督者」にあたるので、労働時間の規制は適用除外となる", "○,×", "×"],

        ["第8章", "農畜水産業従事者は、労働基準法における労働時間の定めは適用されない", "○,×", "○"],
        ["第8章", "管理監督者に対しては、労働時間の規制が適用されないため、労働時間の状況を把握する必要もない", "○,×", "×"]
    ],
    [
        ["第9章", "「社会保険完備」に相応しいものはどれか", "労災保険、雇用保険、健康保険、厚生年金保険,労災保険、雇用保険、生命保険、厚生年金保険,労災保険、生命保険、国民健康保険、国民年金保険", "労災保険、雇用保険、健康保険、厚生年金保険"],
        ["第9章", "社会保険の「任意適用」は、希望する労働者のみ保険に加入させればよい", "○,×", "×"],
        ["第9章", "試用期間を設けて雇用した場合、事業主はその労働者の試用期間中の社会保険の適用申請をしなければならない", "○,×", "○"],
        ["第9章", "2カ月以内の期間を定められた臨時雇用者は、全ての社会保険加入の適用除外である", "○,×", "×"],
        ["第9章", "雇用保険の適用は、1週間の所定労働時間が（●●●●）以上の労働者である", "20時間,30時間,40時間", "20時間"],
        ["第9章", "雇用保険マルチジョブホルダー制度に該当するための要件は「2つの事業所での1週間の所定労働時間の合計が20時間以上」と、もう一つは何か", "2週間以上の雇用が見込まれる,31日以上の雇用が見込まれる,3ヵ月以上の雇用が見込まれる", "31日以上の雇用が見込まれる"],
        ["第9章", "法人事業所と常時5人以上の労働者を使用すある適用業種の個人事業所は、健康保険・厚生年金に加入しなければならない", "○,×", "○"],
        ["第9章", "常時5人以上の労働者を使用している個人事業は、健康保険の強制適用事業所であるが、一部任意適用の事業がある。それはつぎのうちどれか", "製造業,卸売業,飲食店", "飲食店"],
        ["第9章", "1週の所定労働時間と1カ月の所定労働日数が常用雇用者の4分の3以上の場合は、パートタイム労働者であっても健康保険に加入させなければならないが、それ以外の場合は全て加入させなくてよい", "○,×", "×"],
        ["第9章", "会社で勤務中に受けた怪我の治療費にも、健康保険から支払われる", "○,×", "×"],

        ["第9章", "健康保険の保険料の事業主負担率はどれか", "2分の1,3分の2,全部", "2分の1"],
        ["第9章", "社長や役員は、健康保険の加入対象だが、労災保険雇用保険の加入対象ではない", "○,×", "○"],
        ["第9章", "満40歳以上の者は全員、介護保険料を負担しなければならない", "○,×", "○"],
        ["第9章", "厚生年金保険の加入対象とならないのはどれか", "17歳のフルタイム勤務のアルバイト,45歳の社長,72歳の嘱託社員", "72歳の嘱託社員"],
        ["第9章", "最低何年間保険料を納入していれば老齢基礎年金を受給することができるか", "10年,25年,40年", "10年"],
        ["第9章", "パートタイム労働者が厚生年金の被保険者となる条件の1つである、「常時500人以上の被保険者を使用する企業に勤めている」は2022年10月から常時10人以上に改正された", "○,×", "○"],
        ["第9章", "厚生年金保険の強制加入となる事業所はどれか", "常時4名を雇用し、林業を営む法人事業所,常時4名を雇用し、農業を営む個人事業所,常時4名を雇用し、水産業を営む個人事業所", "常時4名を雇用し、林業を営む法人事業所"],
        ["第9章", "厚生年金は、国と会社と従業員が保険料を負担し合う", "○,×", "×"],
        ["第9章", "厚生年金は国民年金に上乗せされるものなので、厚生年金に加入していれば自動的に国民年金にも加入していることになる", "○,×", "○"],
        ["第9章", "国民年金の保険料で正しいものはどれか", "毎月定額の保険料,被保険者の年収に応じて保険料は決定される,被保険者の年齢に応じて保険料は決定される", "毎月定額の保険料"],
        ["第9章", "パートタイム労働者に対しては、労働条件通知書を交付しなくてもよい。", "○,×", "×"],

        ["第9章", "パートタイム労働者から通常の労働者への転換を推進するため、通常の労働者を募集する場合は、その募集内容をすでに雇っているパートタイム労働者に周知しなければならない", "○,×", "○"],
        ["第9章", "パートタイム労働者は、一定の年収を超えると所得税の課税対象となるが、正しいものはどれか", "年収100万円を超えた場合,年収103万円を超えた場合,年収141万円を超えた場合", "年収103万円を超えた場合"],
        ["第9章", "主たる生計者の収入額によって、『配偶者控除』の控除額が変わる", "○,×", "○"],
        ["第9章", "パートタイム労働者は、年収額によって所得税の課税対象となるかどうかが決まるが、対象となる年収額は、残業代も含まれた金額である", "○,×", "○"],
        ["第9章", "退職者から請求があった場合は、使用者は10日以内に積立金や保証金、貯蓄金等を返還しなければならない", "○,×", "×"],
        ["第9章", "労働者が退職した場合、「雇用保険被保険者としての資格喪失の届出」を提出しなければならないが、提出期限と提出先の正しい組み合わせはどれか", "7日以内に労働基準監督署長,10日以内に所轄の公共職業安定所長,14日以内に労働局長", "10日以内に所轄の公共職業安定所長"],
        ["第9章", "事業主は、3年以上勤務した正社員には必ず退職金を支払わなければならない", "○,×", "×"],
        ["第9章", "独自に退職金制度を導入できない中小企業のための制度を)という。この制度は、相当額の退職金を支払えるようにすることを目的に、中小企業対策の一環として設けられている", "中小企業退職金共済制度,勤労者退職金共済制度,中小企業退職金助成制度", "中小企業退職金共済制度"]
    ],
    [
        ["第10章", "次の中で著作権の発生しない著作物はどれか", "法令,図表,地図", "法令"],
        ["第10章", "次の中で、出願登録がなくとも発生する権利はどれか", "著作権,意匠権,商標権", "著作権"],
        ["第10章", "次の中で、有効期限を更新できる権利はどれか", "著作権,意匠権,商標権", "商標権"],
        ["第10章", "募集主に取材をして、自社メディアに求人広告を掲載した。特に取り決めをしていない場合、その求人広告の著作権を持っているのは次の中のどれか", "制作料を払った広告主,求人広告を作成した求人メディア,特に決まっていない", "求人広告を作成した求人メディア"],
        ["第10章", "著作者が明らかな場合の著作権の有効期間で正しいのは次のどれか", "著作者の死後50年,著作者の死後70年,著作者の公表後70年", "著作者の死後70年"],
        ["第10章", "募集主から、「○○さん出演のCMでおなじみの」と、自社の商品広告に使用しているタレントの名前を使用するよう指示された。この場合正しい対応は次の中のどれか", "商品CMに使用されているのであれば特に問題はない,名前だけの使用なので特に問題はない,求人広告での使用について権利関係がクリアになっているか確認した", "求人広告での使用について権利関係がクリアになっているか確認した"],
        ["第10章", "求人広告に使用するイベント写真の背景に無関係の人が写り込んでいるが、特に有名な人ではないので、そのまま使用しても構わない", "○,×", "×"],
        ["第10章", "過去に掲載された求人広告を流用する際は、給与や休日休暇などの求人情報だけでなく「退職者が映りこんでいないか」を注意して確認しなくてはならない", "○,×", "○"],
        ["第10章", "事業主から広告内にある芸能人の写真を使いたいと言ってきたが、勝手に写真を使うと肖像権の侵害になるので似顔絵で我慢してもらった", "○,×", "×"],
        ["第10章", "公式スポンサーでない企業が「オリンピックを応援しています」と広告内に表記することも問題となる場合がある", "○,×", "○"],
        ["第10章", "景品表示法は行き過ぎた景品類と不当表示を防止するための法律であるため、求人広告がその規制を受けることはない", "○,×", "×"]
    ],
    [
        ["第11章", "掲載中の広告にミスがあった場合、速やかに広告を掲載した求人事業主へ報告、謝罪すると共に原因を究明し、関係部署と協力して適切な対応をする", "○,×", "○"],
        ["第11章", "読者・ユーザーから苦情を受けた場合、求人メディアとしては次のうちのどのスタンスを取ることを基本とすべきか", "読者・ユーザーの立場,読者・ユーザーと事業主の間で中立な立場,事業主の立場", "読者・ユーザーと事業主の間で中立な立場"],
        ["第11章", "読者・ユーザーから「求人広告に書かれた労働条件が、実際とは違った。」という苦情が入った場合、具体的な事項を確認した上で、事業主に事実確認をし、苦情の内容が事実であれば、広告の修正・掲載可否の再検討をする", "○,×", "○"],
        ["第11章", "読者・ユーザーと事業主の言い分が食い違ったとき、求人メディアとして最も適切と思われる対応策はどれか", "とりあえず今回は現状のままとする,読者・ユーザーと事業主双方で話し合ってもらう,事業主にお願いして客観的な事実を確認できる資料を提出してもらう", "事業主にお願いして客観的な事実を確認できる資料を提出してもらう"],
        ["第11章", "読者ユーザーからの苦情を事業主に伝えたところ、「誰から聞いたかも分からないような苦情に対応することはできない。誰からの苦情か教えて欲しい」と言われたが、読者・ユーザーからは匿名での対応を希望されていたので、氏名を明かすことは断り、その上で再度対応をお願いした", "○,×", "○"],
        ["第11章", "新聞報道により、事業主の企業実態が掲載基準に抵触することが判明した。事業主に理由を伝えるにあたり、情報源は新聞であることを伝えた", "○,×", "○"],
        ["第11章", "媒体の編集方針に合わないことが判明したが、事業主を納得させることが難しそうなので、先方が諦めるまで何もしないことに決めた", "○,×", "×"],

        ["第11章", "掲載の申込みを受けたが、掲載基準に抵触すあることが判明したため、ただちに掲載の申込みを断ったところ、そのことを不服とした事業主から賠償要求があったので、上司と相談して支払った", "○,×", "×"],
        ["第11章", "アルバイトと2カ月契約を結び、そのつど更新を行ってきたが、2年目にして業績が悪化したため、今回は更新しないことに決めた。どのタイミングで予告すればよいか、と事業主から相談を受けた", "予告は不要,14日以上前,30日以上前", "30日以上前"],
        ["第11章", "日雇労働者であっても、（●●●●）カ月を超えて引き続き雇用された場合は解雇予告の対象となる", "1,2,3", "1"],
        ["第11章", "セクシュアルハラスメントは「専ら男性が女性に対して行うもの」と定義されている", "○,×", "×"],
        ["第11章", "セクシュアルハラスメントが発生した場合、事業主は迅速かつ適切に対応する義務がある", "○,×", "○"],
        ["第11章", "日本コーポ事件での最高裁判決では「媒体には事前調査の一般的な法的義務はない」とされているので、月額100万円の給料を払うと言われても、その根拠を広告主に確認する必要はない", "○,×", "×"],
        ["第11章", "日本コーポ事件で、広告掲載における媒体の責任は問わないとする最高裁判決が出て以降現在まで、日本において広告掲載の媒体責任を認める判例が出たことはない", "○,×", "×"]
    ],
    [
        ["第12章", "労働法とは、労働者を保護し支援することを定めた法律である。次のうちで労働法ではないのはどれか", "育児・介護休業法,個人情報保護法,職業安定法", "個人情報保護法"],
        ["第12章", "就業規則に残業手当は払わないと書いておけば、労働基準法の適用は除外される", "○,×", "×"],
        ["第12章", "労働協約と就業規則では、職場の決まりを定めた就業規則が優先される", "○,×", "×"],
        ["第12章", "賃金額など面接しなければ決定できない労働条件は事前に明示しなくても問題ない", "○,×", "×"],
        ["第12章", "求職者に対し、賃金や勤務時間の明示は職業安定法で決められている", "○,×", "○"],
        ["第12章", "労働条件が当初求職者に説明していた内容がら変わった場合、求人事業主はすみやかに変更内容を求職者に明示し、変更となった理由を問われた場合には適切に説明しなければならない。", "○,×", "○"],
        ["第12章", "全ての「募集情報等提供事業者」は厚生労働省に届出が必要である", "○,×", "×"],
        ["第12章", "全ての内容募集主は「求人情報を正確・（●●●●）に保たなければならない」", "詳細,最新,適正", "最新"],
        ["第12章", "新卒者等若者を募集する場合は、情報提供項目の3類型ごとに1つ以上の情報を提供することが法の指針として定められている。その3類型とは、（ア）募集・採用に関する状況（イ）職業能力の開発・向上に関する状況（ウ）企業における雇用管理に関する状況のことである", "○,×", "○"],
        ["第12章", "若者雇用促進法に基づいて、厚生労働省では若者を募集・採用等する事業主などが講ずべき措置をまとめた（●●●●）を告示している", "青少年雇用対策基本方針,労働施策基本方針,事業主等指針", "事業主等指針"],

        ["第12章", "採用内定と引替えに、他の会社への就職活動を取りやめるよう強要することは、人材確保の自由競争の観点から、特段の規制は設けられていない", "○,×", "×"],
        ["第12章", "定年を65歳未満で定めている事業主は、継続雇用制度を導入すれば定年引上げの必要はない", "○,×", "○"],
        ["第12章", "A社で定年を迎えた高齢者の継続雇用先を、グループ内子会社のB社に決定した", "○,×", "○"],
        ["第12章", "事業主には65歳までの雇用確保義務に加えて、70歳までの就業確保が努力義務として課せられている", "○,×", "○"],
        ["第12章", "高年齢者雇用安定法において、定年を65～70歳未満に設定している事業主が努めなければならない義務は次のうちどれか", "定年対応義務,高年齢者就業確保措置導入努力義務,高年齢者雇用確保措置導入義務", "高年齢者就業確保措置導入努力義務"],
        ["第12章", "定年後に有期労働契約で継続雇用された労働者の労働条件が、定年前の他の無期労働契約労働者の労働条件と相違していても不合理とはならない", "○,×", "○"],
        ["第12章", "働き方改革関連法のポイントとして合致しないものはどれか", "外国人雇用枠の拡大,長時間労働の是正、多様で柔軟な働き方の実現等,雇用形態に関わらない公正な待遇の確保", "外国人雇用枠の拡大"],
        ["第12章", "「非正規雇用労働者」に該当しないのはどれか", "業務委託,派遣スタッフ,年契約社員", "業務委託"],
        ["第12章", "働き方改革の総合的かつ継続的な推進のために策定されたものは次のうちのどれか", "労働施策基本方針,事業主等指針,青少年雇用対策基本方針", "労働施策基本方針"],
        ["第12章", "働き方改革関連法に直接関係のない法律は次のうちどれか", "労働施策総合推進法,労働基準法,職業安定法", "職業安定法"],
        ["第12章", "労働基準法は、労働者の労働条件の（●●●●）を定めた法律である", "標準的な基準,目安の基準,最低基準", "最低基準"],

        ["第12章", "労働基準法に定める基準に満たない労働条件は無効になるだけであり、使用者に罰則はない", "○,×", "×"],
        ["第12章", "労働基準法は会社単位ではなく、事業所ごとに適用される", "○,×", "○"],
        ["第12章", "『パートタイム・有期雇用労働法』の対象となっていない「非正規雇用労働者」は次のうちどれか", "短時間労働者,有期雇用労働者,派遣労働者", "派遣労働者"],
        ["第12章", "同じ企業で働く正社員と非正規雇用労働者との間で、基本給手当賞与など（●●●●）について、不合理な差を設けることが禁止されている", "基本的な待遇,あらゆる待遇,支給金額", "あらゆる待遇"],
        ["第12章", "正社員と非正規雇用労働者の間の待遇差が不合理なものかそうではないかを判断するツールとして「同一労働同一賃金ガイドライン』が作成された", "○,×", "○"],
        ["第12章", "労働安全衛生法により使用者は、労働者の安全と健康を守るために、労働者10名以上の事業場ごとに安全衛生管理組織の設置が義務づけられている", "○,×", "○"],
        ["第12章", "使用者は、健康管理の観点からすべての労働者の労働時間の状況を、客観的に把握することが義務付けられている", "○,×", "○"],
        ["第12章", "従業員100人未満の事業場では、医師や保健師によるストレスチェックは努力義務となっている", "○,×", "×"],
        ["第12章", "「受動喫煙にさらされないよう特に配慮する」べき範囲として正しいのは次のうちどれか", "満15歳に到達した日以降最初の3月31日が終了するまでの者,18歳未満の者,20歳未満の者", "20歳未満の者"],
        ["第12章", "受動喫煙防止の対象施設であっても、ホテルの客室は適用除外となっている", "○,×", "○"],

        ["第12章", "喫煙可能場所は、成人でなければ従業員であっても立ち入らせることができない", "○,×", "×"],
        ["第12章", "事業者（求人者）は、労働者の募集及び求人の申込みの際に、どのような受動喫煙対策を講じているかについて、明示する義務はない", "○,×", "×"],
        ["第12章", "女性が職業生活において、希望に応じて十分に能力を発揮し、活躍できる環境を整備するために事業主が求められているものに該当しないものはどれか", "厚生労働大臣の認定を受ける,自社の女性の活躍に関する情報の公開,行動計画の策定", "厚生労働大臣の認定を受ける"],
        ["第12章", "女性活躍を推進する取り組みが優秀な企業について、厚生労働大臣が認定する制度を（●●●●）認定という", "ほわいと,なでしこ,えるぼし", "えるぼし"],
        ["第12章", "2022年4月より、女性活躍推進法に基づく一般事業主行動計画の策定義務の対象が、常時雇用する労働者が（●●●●）人以上の事業主に拡大された", "51,101,201", "101"],
        ["第12章", "育児・介護休業法において、小学校就学前の子を養育する労働者が、病気・怪我をした子の看護のために1年度に取得できる休暇の日数は、子供が1人であれば何日か", "3日,5日,10日", "5日"],
        ["第12章", "事業主は、（●●●●）に満たない子を養育する労働者が請求した場合は、所定労働時間を超えて労働させてはならない", "1歳,3歳,小学校入学年", "3歳"],
        ["第12章", "事業主は、労働者から妊娠又は出産した旨の申し出があったとき、育児休業制度を知し、制度の取得意向を確認する義務がある", "○,×", "○"],
        ["第12章", "短時間就労者および派遣労働者の雇用保険の加入適用基準として正しいのはどれか", "31日以上の雇用が見込みがあること,6ヵ月以上の雇用見込みがあること,1年以上の雇用見込みがあること", "31日以上の雇用が見込みがあること"],
        ["第12章", "雇用保険の被保険者になるのは次のうちどれか", "昼間学生,季節的事業に雇用されるもの,65歳以上で新たに雇用されるもの", "65歳以上で新たに雇用されるもの"],

        ["第12章", "雇用保険の基本手当を受けている者が早期に再就職した際、一定の要件を満たしている場合に支給される就職促進給付はなんというか", "再就職成功手当,再就職手当,再就職完了給付金", "再就職手当"],
        ["第12章", "労災保険の保険料の負担について、正しいのはどれか", "事業主と労働者の折半,事業主と国の折半,全額事業主負担", "全額事業主負担"],
        ["第12章", "業務上または通勤で被災した労働者は、労災保険の給付を請求することができる", "○,×", "○"],
        ["第12章", "労働審判制度は、労働者と事業主間の紛争を迅速に解決することを目的としているが、原則として何回以内の期日で審理が終結することになっているか", "2回,3回,5回", "3回"],
        ["第12章", "保有する個人情報が5000件以下の事業所であっても、個人情報保護法の対象となる", "○,×", "○"],
        ["第12章", "職業安定法の指針では、募集情報等提供事業者の責務として、求職者の秘密に該当する個人情報の厳重な管理等、求職者の個人情報を適切に管理するよう定めているが、個人情報保護法においても、個人情報を第三者に提供する場合、本人の事前同意を得なければならない", "○,×", "○"],
        ["第12章", "履歴書は、個人情報保護法によって返却が義務付けられている", "○,×", "×"],
        ["第12章", "採用後の事務手続きのことを考えて、応募時にマイナンバーを教えてもらうことは問題ない", "○,×", "×"],
        ["第12章", "モデルになれるからといってスクールに勧誘する求人募集や、個人にネットショップを開店させるドロップシッピングなども、特定商取引法の業務提供誘引販売取引に該当する可能性がある", "○,×", "○"],

        ["第12章", "家庭教師派遣と教材販売を行っているA社はテレアポの際、屋号「家庭教師の○○です。」と名乗っている。これは、特定商取引法の氏名等の明示義務違反になる", "○,×", "○"],
        ["第12章", "特定商取引法は消費者を保護する目的のものであるため、個人事業主などは一切適用されない", "○,×", "×"],
        ["第12章", "インターネットで物品を販売する場合は、特定商取引法による規制を受けない", "○,×", "×"],
        ["第12章", "特定継続的役務提供として指定されているのは、次のうちどれか", "マッサージ,学習塾,介護施設", "学習塾"],
        ["第12章", "訪問購入を行う際、飛び込みで訪問しても、事業者名と勧誘目的を明示すれば問題ない", "○,×", "×"],
        ["第12章", "訪問購入のクーリングオフ期間中は、売った物を消費者が手元にとどめておくことが可能である", "○,×", "○"],
        ["第12章", "訪問販売や電話勧誘販売、特定継続的役務提供の契約においては、一定期間内であれば、消費者による契約の解除（クーリングオフ）が認められているが、その期間は何日間か", "4日,8日,12日", "8日"],
        ["第12章", "宿泊施設のうち、休憩料金の表示があり、かつ自動精算機が設置されているものはラブホテルとして風営法の適用を受ける", "○,×", "×"],
        ["第12章", "キャバクラ・クラブなど接待のある飲食店の営業時間は特に規制はない", "○,×", "×"],
        ["第12章", "スナックなどの深夜酒類提供飲食店営業の店舗で、テーブル席の客の傍に着席して接客したり、客とカラオケでデュエットするなどの接待行為をすることは風営法違反とはならない", "○,×", "×"],

        ["第12章", "メイド喫茶も接待を伴うのであれば風俗営業となる", "○,×", "○"],
        ["第12章", "風俗営業の接待を伴う業務は、20歳未満の者は行うことができない", "○,×", "×"],
        ["第12章", "出会い系喫茶は（●●●●）として規制を受ける", "出会い系サイト関連事業,店舗型性風俗特殊営業,風俗営業", "店舗型性風俗特殊営業"],
        ["第12章", "実店舗を持たない事業者が、一般用医薬品のネット販売をすることは禁止されている", "○,×", "○"],
        ["第12章", "医療法によって、病院の広告は規制を受けるが、求人広告はその適用外である", "○,×", "○"],
        ["第12章", "ドライバーの募集で、応募書類に運転記録証明書があったので、採用後の提出にするようアドバイスした", "○,×", "○"],
        ["第12章", "運転代行業で客の車を運転するドライバーは、第2種運転免許が必要である", "○,×", "○"],
        ["第12章", "タクシーは一般貸切旅客自動車運送事業である", "○,×", "×"],
        ["第12章", "18歳未満の者は、警備業法における警備員となることはできない", "○,×", "○"],
        ["第12章", "警備スタッフの募集要項を取材したところ、法定研修期間中の手当について、「4日間で2万円払う」と担当者から言われたので、研修が終わればただちに支払われるのか確認した", "○,×", "○"],
        ["第12章", "少額訴訟は、60万円以下の金銭支払い請求に限られる", "○,×", "○"]
    ]
];

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}