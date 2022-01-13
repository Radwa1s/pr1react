import React from 'react'
import { Button, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

export const FormComp = () => {
    return (
        <>

            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl id="inlineFormInputGroup" placeholder="Username" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mb-2"
                            label="Remember me"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            <section class="et-hero-tabs">
                <h1>ANIMALS</h1>
                <h3>SOMTHING FOR ANIMALS LOVER</h3>

                <div class="et-hero-tabs-container">
                    <a class="et-hero-tab" href="#tab-cat">Cats</a>
                    <a class="et-hero-tab" href="#tab-bird">Birds</a>
                    <a class="et-hero-tab" href="#tab-dog">Dogs</a>
                    <a class="et-hero-tab" href="#tab-panther">Panthers</a>
                    <a class="et-hero-tab" href="#tab-other">Other</a>
                    <span class="et-hero-tab-slider"></span>
                </div>
            </section>


            <main class="et-main">
                <section class="et-slide" id="tab-cat">
                    <h1>Cats</h1>
                    <h3>something about cat</h3>
                </section>
                <section class="et-slide" id="tab-bird">
                    <h1>Birds</h1>
                    <h3>something about bird</h3>
                </section>
                <section class="et-slide" id="tab-dog">
                    <h1>Dogs</h1>
                    <h3>something about dogs</h3>
                </section>
                <section class="et-slide" id="tab-panther">
                    <h1>Panthers</h1>
                    <h3>something about Panthers</h3>
                </section>
                <section class="et-slide" id="tab-other">
                    <h1>Other</h1>
                    <h3>something about other</h3>
                </section>
            </main>

        </>

    )
}