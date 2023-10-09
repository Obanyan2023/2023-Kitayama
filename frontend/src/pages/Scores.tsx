import React from 'react';
import {MainLayout} from "../components/Layout/MainLayout";
import {DESC} from "../config";
import {ScoreEntity} from "../types";
import {is_set} from "../utils/isType";
import {getScoresApi, storeScoresApi} from "../features/scores/api";

/**
 * スコア画面
 *
 * @return {JSX.Element}
 */
export default function Scores(): JSX.Element {
    const [scores, setScores] = React.useState<ScoreEntity[]>([]);

    // スコアを取得
    React.useEffect(() => {
        getScoresApi(DESC).then((res: ScoreEntity[]) => {
            setScores(res);
        });
    }, []);

    // スコアを表示
    const scoreList = scores.map((score: ScoreEntity, index: number) => {
        return (
            <div key={index}>
                <div>{score.nickname}</div>
                <div>{score.score}</div>
            </div>
        );
    });

    return (
        <MainLayout title={"走れ！すすむ君！ - スコア"}>
            <button onClick={() => storeScoresApi(
                Math.random().toString(32).substring(2),
                Math.floor(Math.random() * 100 + 1)
            )}>Debug用 - ランダムデータ保存</button>
            <div>
                {is_set<ScoreEntity[]>(scores) && scoreList}
            </div>
        </MainLayout>
    );
}