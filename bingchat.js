import { BingChat } from 'bing-chat'

export const getBing_chat = async (req, res) => {
    const { param, bingcookie } = req.body;
    const api = new BingChat({ cookie: bingcookie });
    if (!param || !bingcookie) {
        res.status(400).send('参数不能为空');
    } else {
        try {
            const response = await api.sendMessage(param);
            console.log(response.text)
            res.send(response.text)
        } catch(e) {
            console.log(e);
            res.json(e)
        }
    }
}
