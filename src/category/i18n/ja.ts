import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomy',
  title: '天文学ツール',
  description: 'アマチュア天文家のための無料の計算機とシミュレーター。観測セッションや天体写真の計画に。',
  seo: [
    { type: 'title', text: 'アマチュア天文学：観測する夜のためのガイド', level: 2 },
    {
      type: 'paragraph',
      html: '<p>空は毎晩変わり、観測のしかたも変わります。この<strong>無料の天文ツール</strong>集は、ここから何が見えるかという疑問から、観測や天体写真を面白くする調整まで寄り添います。</p>',
    },
    {
      type: 'paragraph',
      html: '<p>今の自分に合うところから始めましょう。初心者には分かりやすい目安を、経験者には倍率、分解能、到達範囲を比べる材料を用意しています。撮影では、数字で準備して現地の空と比べられます。</p>',
    },
    { type: 'title', text: '初めての人へ：迷わず空を知る', level: 2 },
    {
      type: 'paragraph',
      html: '<p>公式を暗記する必要はありません。ボートル・スケールで明るい空と暗い空を比べ、接眼レンズによる倍率と視野の変化を確かめ、自分の望遠鏡に合う対象を考えましょう。流星群を見る時間も選べます。</p>',
    },
    { type: 'title', text: '経験者へ：今夜見るものを選ぶ', level: 2 },
    {
      type: 'paragraph',
      html: '<p>機材が分かってきたら、何ができるかだけでなく、いつ、どう使うかが大切です。口径、焦点距離、接眼レンズ、射出瞳を関連づけ、二重星の間隔とドーズ、レイリー限界を比べ、その夜に合う時間を決めます。</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>空を読む：</strong> 観測場所を決める前に、明るい空と暗い空の違いを比べます。',
        '<strong>機材を知る：</strong> 口径、限界等級、分解能、光学的な限界から対象を考えます。',
        '<strong>視野をつくる：</strong> 接眼レンズを替える前に、倍率、射出瞳、視野を比べます。',
        '<strong>時間を選ぶ：</strong> 条件に合わせて、流星群と観測時間を計画します。',
        '<strong>画像を準備する：</strong> 初期露出を考え、合成するフレームを整理します。',
      ],
    },
    {
      type: 'tip',
      title: '最高の道具は、やはり頭上の空です',
      html: '<p>結果は約束ではなく、方角を示すコンパスです。大気、ピント、透明度、経験で見えるものは変わります。計算と観測メモを比べると、自分に合う方法が見えてきます。</p>',
    },
    { type: 'title', text: 'プロの観測者へ：計算し、比べ、調整する', level: 2 },
    {
      type: 'paragraph',
      html: '<p>高度な機材や複数人の観測、再現したい写真を準備するときに、これらの目安が変数の整理に役立ちます。500ルールとNPFを出発点に、枚数と総時間を決め、四隅、ヒストグラム、実際の条件を確認して次を調整します。</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'ボートル・スケール', value: '9段階', icon: 'mdi:weather-night' },
        { label: '限界等級', value: '計算可能', icon: 'mdi:telescope' },
        { label: '500/NPFの目安', value: '出発点', icon: 'mdi:timer-sand' },
        { label: 'ドーズ基準', value: '分解能', icon: 'mdi:flare' },
      ],
    },
  ],
};
