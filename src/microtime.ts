export class Microtime {
    public static now(): number {
        const hr_time: [number, number] = process.hrtime();

        return Number(Date.now() + String(hr_time[1]).slice(3, 6));
    }
}