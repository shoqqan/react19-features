export const delay = async (time: number = 1000) => {
    return new Promise((res) => setTimeout(res, time))
}