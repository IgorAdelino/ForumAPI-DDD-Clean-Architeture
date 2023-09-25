import { WatchedList } from "./watched-list"

class NumberWatchedList extends WatchedList<number> {
    compareItems(a: number, b: number): boolean {
        return a === b
    }
}


describe('watched list', () => {
    it('should be able to create a watched list with initial items ', () => {
        const list = new NumberWatchedList([1,2,3])

        expect(list.currentItems).toHaveLength(3)
    })

    it('should be able to add new items to the list', () => {
        const list = new NumberWatchedList([1,2,3])

        list.add(4)

        expect(list.currentItems).toHaveLength(4)
        expect(list.getNewItems()).toEqual([4])
    })


    it('should be able to remove items from the list', () => {
        const list = new NumberWatchedList([1,2,3])

        list.remove(2)

        expect(list.currentItems).toHaveLength(2)
        expect(list.getNewItems()).toEqual([2])
    })
})