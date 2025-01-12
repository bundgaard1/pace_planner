export namespace models {
	
	export class Run {
	    id: string;
	    title: string;
	    distance: number;
	    run_type: string;
	    week: number;
	    day: number;
	    notes: string;
	    completed: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Run(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	        this.distance = source["distance"];
	        this.run_type = source["run_type"];
	        this.week = source["week"];
	        this.day = source["day"];
	        this.notes = source["notes"];
	        this.completed = source["completed"];
	    }
	}
	export class TrainingPlan {
	    id: string;
	    name: string;
	    description: string;
	    start_date: string;
	    weeks: number;
	    runs: Run[];
	
	    static createFrom(source: any = {}) {
	        return new TrainingPlan(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.description = source["description"];
	        this.start_date = source["start_date"];
	        this.weeks = source["weeks"];
	        this.runs = this.convertValues(source["runs"], Run);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

