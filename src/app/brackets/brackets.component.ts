import { Component, OnInit } from '@angular/core';
import { NgttTournament } from '../../../node_modules/ng-tournament-tree/lib/declarations/interfaces';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.scss'],
})
export class BracketsComponent implements OnInit {
  public singleEliminationTournament: NgttTournament;

  constructor() {}

  ngOnInit() {
    this.singleEliminationTournament = {
      rounds: [
        {
          type: 'Winnerbracket',
          matches: [
            {
              teams: [
                { name: 'Team  A', score: 1 },
                { name: 'Team  B', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  C', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  E', score: 1 },
                { name: 'Team  F', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  G', score: 1 },
                { name: 'Team  H', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  A', score: 1 },
                { name: 'Team  B', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  C', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  E', score: 1 },
                { name: 'Team  F', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  G', score: 1 },
                { name: 'Team  H', score: 2 },
              ],
            },
          ],
        },
        {
          type: 'Winnerbracket',
          matches: [
            {
              teams: [
                { name: 'Team  A', score: 1 },
                { name: 'Team  B', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  C', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  E', score: 1 },
                { name: 'Team  F', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  G', score: 1 },
                { name: 'Team  H', score: 2 },
              ],
            },
          ],
        },
        {
          type: 'Winnerbracket',
          matches: [
            {
              teams: [
                { name: 'Team  B', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  F', score: 1 },
                { name: 'Team  H', score: 2 },
              ],
            },
          ],
        },
        {
          type: 'Final',
          matches: [
            {
              teams: [
                {
                  name: 'Team  D',
                  score: 1,
                },
                {
                  name: 'Team  H',
                  score: 2,
                },
              ],
            },
            {
              teams: [
                {
                  name: 'Team  F',
                  score: 1,
                },
                {
                  name: 'Team  B',
                  score: 2,
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
