import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as backend from '../build/index.main.mjs'
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import { ctcInfoStr } from '../utils'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

 function Home() 
{  

  const reach = loadStdlib('ALGO');
  reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect 
  }))

  const stdlib = loadStdlib();

  const navigate = useNavigate()

  const [acc, setAcc] = useState();
  const [useful, setUseful] = useState();
 
  const helper = async () => {

    
    const account = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(account);
    const bal = reach.formatCurrency(balAtomic, 4);
    console.log(account, bal);

    setAcc(account);

  }

  useEffect(() => {

    helper();
    
  }, [])


  const OUTCOME = ['Proposal 1 wins', 'Proposal 2 wins', 'Timeout'];


  const handleVote = async (e) => {
    e.preventDefault()
  
    const ctcPollster = acc.contract(backend);
    const ctcInfo = ctcPollster.getInfo();

    const accVoter = await reach.getDefaultAccount()

    const Common = (Who) => ({
      showOutcome: (outcome, forA, forB) => {
        if ( outcome == 2 ) {
          console.log(`${Who} saw the timeout`); }
        else {
          console.log(`${Who} saw a ${forA}-${forB} outcome: ${OUTCOME[outcome]}`);
        }
    } });

      const ctcVoter = accVoter.contract(backend, JSON.parse(useful));
      const Who = `Voter #1`;
      const vote = Math.random() < 0.5;
      let voted = false;
      backend.Voter(ctcVoter, {
        ...Common(Who),
        getVote: (() => vote),
        voterWas: ((voterAddr) => {
          if ( stdlib.addressEq(voterAddr, accVoter) ) {
            console.log(`${Who} voted: ${vote ? 'Proposal 1' : 'Proposal 2'}`);
            voted = true;
          } } ),
        shouldVote: (() => ! voted) });

        console.log("voted", vote);

  }

  const handleBeginVoting = async (e) => {
    
    e.preventDefault()

    const Common = (Who) => ({
      showOutcome: (outcome, forA, forB) => {
        if ( outcome == 2 ) {
          console.log(`${Who} saw the timeout`); }
        else {
          console.log(`${Who} saw a ${forA}-${forB} outcome: ${OUTCOME[outcome]}`);
        }
    } });

    const ctcPollster = acc.contract(backend);
    const ctcInfo = ctcPollster.getInfo();


    backend.Pollster(ctcPollster, {
      ...Common('Pollster'),
      getParams: () => ({
        ticketPrice: stdlib.parseCurrency(5),
        deadline: 10,
        prop1Addr: acc,
        prop2Addr: acc,
      }),
    })

    const ctcInfoStr = JSON.stringify(await ctcPollster.getInfo(), null, 2);
    console.log(ctcInfoStr);
    setUseful(ctcInfoStr);
  }

  return (
    <div>

    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ display:'flex', justifyContent:'center' }}>
        <Typography variant="h5" component="div">
          View the proposals
        </Typography>
      </CardContent>
      <CardActions style={{ display:'flex', justifyContent:'center' }}>
        <Button onClick={handleBeginVoting} size="small">Begin voting</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={6}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Proposal 1
        </Typography>
        <Typography variant="body2">
          Use the money to stake more Algorand
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleVote} size="small">Vote for this proposal</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={6}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Proposal 2
        </Typography>
        <Typography variant="body2">
          Use the money to stake more ETH
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleVote} size="small">Vote for this proposal</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>
  </div>
  )
}

export default Home
