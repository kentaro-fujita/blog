import React, { Fragment } from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import TextLink from '../atoms/TextLink'

const AboutText: React.FC = () => {
  return (
    <Fragment>
      <Title type="h1" className="text-center mb-4">
        About
      </Title>
      <Title type="h2" className="mb-2 mt-2">
        Kentaro Fujita
      </Title>
      <Text>
        I received masters degree from the Graduate School of Science and
        Technology, Nara Institute of Science and Technology (NAIST), Japan. My
        research interest includes blockchain security and machine learning.
      </Text>
      <Title type="h2" className="mb-2 mt-2">
        Publications
      </Title>
      <Title type="h3" className="mb-2 mt-2">
        Refereed Journal
      </Title>
      <ol className="text-gray-500 dark:text-gray-300 list-decimal ml-4">
        <li>
          <Text>
            Kentaro Fujita, Yuanyu Zhang, Masahiro Sasabe and Shoji Kasahara,
            &lsquo;&lsquo;Mining Pool Selection under Block WithHolding
            Attack,&rsquo;&rsquo; Applied Sciences, vol. 11, no. 4, pp.1-18,
            February 2021.
          </Text>
          <TextLink href="https://doi.org/10.3390/app11041617">
            doi:10.3390/app11041617
          </TextLink>
        </li>
      </ol>
      <Title type="h3">International Conferences</Title>
      <ol className="text-gray-500 dark:text-gray-300 list-decimal ml-4">
        <li>
          <Text>
            Kentaro Fujita, Yuanyu Zhang, Masahiro Sasabe, Shoji Kasahara.
            &lsquo;&lsquo;Mining Pool Selection Problem in the Presence of Block
            Withholding Attack,&rsquo;&rsquo; in Proc. of IEEE International
            Conference on Blockchain (Blockchain), pp.321-326, November 2020
            (Short paper, acceptance rate: 24.9%).
          </Text>
          <TextLink href="https://doi.org/10.1109/Blockchain50366.2020.00047">
            doi:10.1109/Blockchain50366.2020.00047
          </TextLink>
        </li>
        <li>
          <Text>
            Kentaro Fujita, Yuanyu Zhang, Masahiro Sasabe and Shoji Kasahara,
            &lsquo;&lsquo;Intelligent Mining Pool Selection in the Case of
            Unobservable Block Withholding Attack,&rsquo;&rsquo; in Proc. of
            IEEE International Conference on Blockchain and Cryptocurrency
            (ICBC), pp.1-4, May 2021
          </Text>
          <TextLink href="https://doi.org/10.1109/ICBC51069.2021.9461125">
            doi:10.1109/ICBC51069.2021.9461125
          </TextLink>
        </li>
      </ol>
      <Title type="h2" className="mb-2 mt-2">
        Domestic Conference
      </Title>
      <ol className="text-gray-500 dark:text-gray-300 list-decimal ml-4">
        <li>
          <Text>
            藤田 健太郎, 張 元玉, 笹部 昌弘, 笠原 正治, &lsquo;&lsquo;Block
            Withholding Attack
            が存在する場合のマイニングプール選択問題,&rsquo;&rsquo;
            電子情報通信学会技術研究報告, vol. 119, no. 460, pp. 71-76,
            2020.3.5.
          </Text>
        </li>
      </ol>
      <Title type="h2" className="mb-2 mt-2">
        Awards
      </Title>
      <ul className="text-gray-500 dark:text-gray-300 list-decimal ml-4">
        <li>
          <Text>
            &lsquo;&lsquo;Chained Box - A Smart IoT Box Using a
            Blockchain&rsquo;&rsquo;, JPHACKS 2020, ファイナリスト賞,
            富士ゼロックス賞，2020.
          </Text>
        </li>
        <li>
          <Text>
            Judges’ Prize Winners’ Certificate, ITU AI/ML in 5G Challenge
            (Regional round), 2020
          </Text>
        </li>
        <li>
          <Text>
            Best Performance Award, ITU AI/ML in 5G Challenge Global Round in
            Japan, 2020
          </Text>
        </li>
      </ul>
      <Title type="h2" className="mb-2 mt-2">
        Others
      </Title>
      <ul className="text-gray-500 dark:text-gray-300 list-decimal ml-4">
        <li>
          <Text>日本学生支援機構, 特に優れた業績による返還全額免除, 2021.</Text>
        </li>
      </ul>
    </Fragment>
  )
}
export default AboutText
