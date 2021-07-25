import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Title from '../atoms/Title'
import colors from '../../configs/colors.json'
import SideBar, { SideBarProps } from './SideBar'

const styles = css`
  .about_text {
    width: 80%;
    margin: 0 auto;
  }
  .about_text_main {
    width: 80%;
    float: left;
    padding: 1rem;
  }
  .link {
    color: ${colors.main};
  }
  @media screen and (max-width: 640px) {
    .about_text {
      width: 100%;
      margin: 0 auto;
    }
    .about_text_main {
      width: 100%;
      padding: 1rem;
    }
  }
`

export type AboutTextProps = SideBarProps

const AboutText: React.FC<AboutTextProps> = ({ latestPosts, allTags }) => {
  return (
    <Fragment>
      <div className="about_text">
        <div className="about_text_main">
          <Title type="large">About</Title>
          <hr></hr>
          <Title type="medium">Kentaro Fujita</Title>
          <p>
            I received masters degree from the Graduate School of Science and
            Technology, Nara Institute of Science and Technology (NAIST), Japan.
            My research interest includes blockchain security and machine
            learning.
          </p>
          <Title type="medium">Publications</Title>
          <Title type="small">Refereed Journal</Title>
          <ol>
            <li>
              Kentaro Fujita, Yuanyu Zhang, Masahiro Sasabe and Shoji Kasahara,
              &lsquo;&lsquo;Mining Pool Selection under Block WithHolding
              Attack,&rsquo;&rsquo; Applied Sciences, vol. 11, no. 4, pp.1-18,
              February 2021.
              <a href="https://doi.org/10.3390/app11041617" className="link">
                doi:10.3390/app11041617
              </a>
            </li>
          </ol>
          <Title type="small">International Conferences</Title>
          <ol>
            <li>
              Kentaro Fujita, Yuanyu Zhang, Masahiro Sasabe, Shoji Kasahara.
              &lsquo;&lsquo;Mining Pool Selection Problem in the Presence of
              Block Withholding Attack,&rsquo;&rsquo; in Proc. of IEEE
              International Conference on Blockchain (Blockchain), pp.321-326,
              November 2020 (Short paper, acceptance rate: 24.9%).
              <a
                href="https://doi.org/10.1109/Blockchain50366.2020.00047"
                className="link"
              >
                doi:10.1109/Blockchain50366.2020.00047
              </a>
            </li>
            <li>
              Kentaro Fujita, Yuanyu Zhang, Masahiro Sasabe and Shoji Kasahara,
              &lsquo;&lsquo;Intelligent Mining Pool Selection in the Case of
              Unobservable Block Withholding Attack,&rsquo;&rsquo; in Proc. of
              IEEE International Conference on Blockchain and Cryptocurrency
              (ICBC), pp.1-4, May 2021
              <a
                href="https://doi.org/10.1109/ICBC51069.2021.9461125"
                className="link"
              >
                doi:10.1109/ICBC51069.2021.9461125
              </a>
            </li>
          </ol>
          <Title type="small">Domestic Conference</Title>
          <ol>
            <li>
              藤田 健太郎, 張 元玉, 笹部 昌弘, 笠原 正治, &lsquo;&lsquo;Block
              Withholding
              Attackが存在する場合のマイニングプール選択問題,&rsquo;&rsquo;
              電子情報通信学会技術研究報告, vol. 119, no. 460, pp. 71-76,
              2020.3.5.
            </li>
          </ol>
          <Title type="medium">Awards</Title>
          <ul>
            <li>
              &lsquo;&lsquo;Chained Box - A Smart IoT Box Using a
              Blockchain&rsquo;&rsquo; ,JPHACKS 2020, ファイナリスト賞,
              富士ゼロックス賞，2020.
            </li>
            <li>
              Judges’ Prize Winners’ Certificate, ITU AI/ML in 5G Challenge
              (Regional round), 2020
            </li>
            <li>
              Best Performance Award, ITU AI/ML in 5G Challenge Global Round in
              Japan, 2020
            </li>
          </ul>
          <Title type="medium">Others</Title>
          <ul>
            <li>日本学生支援機構, 特に優れた業績による返還全額免除, 2021.</li>
          </ul>
        </div>
        <SideBar latestPosts={latestPosts} allTags={allTags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default AboutText
