import { getArticlesLoading, REQUEST_ARTICLES_LOADING } from "../action";
import { getArticlesSuccess, REQUEST_ARTICLES_SUCCESS } from "../action";
import { getArticles, getArticlesFailure } from "../action";


describe('getArticlesLoading',() => {
    it('should return obj with certain type', () =>{
        const expected = {
            type: REQUEST_ARTICLES_LOADING
        }
        const received = getArticlesLoading();
        expect(received).toEqual(expected);
    });
});

describe('getArticlesSuccess',() => {
    it('should return obj with certain type', () =>{
        const payload = [];
        const expected = {
            type: REQUEST_ARTICLES_SUCCESS,
            payload
        }
        const received = getArticlesSuccess(payload);
        expect(received).toEqual(expected);
    });
});



describe('getArticles',() => {
    it('dispach getArticlesLoading', () =>{
        const mockDispatch = jest.fn();
        getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith(getArticlesLoading())
    });

    it('dispach success action on successful fetch', async() =>{
        const result = {articles: []};
        fetch.mockResponseOnce(JSON.stringify(result));
        const mockDispatch = jest.fn();
        await getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(result));
    });

    it('dispach failure action on error in fetch', async() =>{
        //const result = { };
        fetch.mockRejectOnce(new Error('test'));
        const mockDispatch = jest.fn();
        await getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesFailure('test'));
    });
});
