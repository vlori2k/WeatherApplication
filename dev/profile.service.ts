import {Injectable} from "angular2/core";
import {Profile} from "./profile";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProfileService {
    private profiles: Profile[] = [
        new Profile('Default Profile', ['Oslo', 'Paris', 'Bordeaux'])
    ];

    saveNewProfile(cities: string[]) {
        const profileName = 'Profile ' + this.profiles.length;
        const profile = new Profile(profileName, cities);
        this.profiles.push(profile);
    }

    getProfiles() {
        return this.profiles;
    }

    deleteProfile(profile: Profile) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    }
}