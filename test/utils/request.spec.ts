import { expect } from '../_helpers/getChai';
import * as WavesAPI from '../../dist/waves-api.min';


let Waves;


describe('utils/request', () => {

    beforeEach(() => {
        Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);
    });

    it('should normalize all types of paths', () => {
        expect(Waves.request.normalizePath('/transactions/unconfirmed')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('/transactions///unconfirmed/')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('//transactions/unconfirmed')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('\/\/transactions/unconfirmed')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('\/\/transactions\/unconfirmed\/\///\/')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('transactions/unconfirmed/')).to.equal('/transactions/unconfirmed');
    });

});
